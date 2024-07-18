import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import User from "@/lib/models/users";

export async function POST(req: Request) {
  try {
    const purl = new URL(req.url);
    const uid = purl.searchParams.get("uid");
    const id = purl.searchParams.get("id");

    if (!uid || !id) {
      throw new Error("Invalid parameters or roadmap not found.");
    }

    const data = await req.formData();
    const transactionId = data.get("transactionId");

    if (!transactionId) {
      throw new Error("Transaction ID is missing.");
    }

    const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID;
    const saltKey = process.env.NEXT_PUBLIC_SALT_KEY;
    const saltIndex = process.env.NEXT_PUBLIC_SALT_INDEX;
    const uatId = process.env.NEXT_PUBLIC_UAT_ID;
    const nextAuthUrl = process.env.NEXTAUTH_URL;

    if (!merchantId || !saltKey || !saltIndex || !uatId || !nextAuthUrl) {
      throw new Error("Environment variables are not properly configured.");
    }

    // Generate checksum
    const st = `/pg/v1/status/${merchantId}/${transactionId}${saltKey}`;
    const dataSha256 = sha256(st).toString();
    const checksum = `${dataSha256}###${saltIndex}`;
    console.log("Checksum:", checksum);

    // Prepare API request to check payment status
    const options = {
      method: "GET",
      url: `${uatId}/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };

    // Check payment status
    const response = await axios.request(options);

    if (!response || !response.data) {
      throw new Error("Failed to fetch payment status.");
    }

    console.log("Payment status:", response.data.code);

    // Determine transaction status based on API response
    const transactionStatus = response.data.code === "PAYMENT_SUCCESS" ? "SUCCESS" : "FAILURE";

    // Update user's purchase status in the database
    const user = await User.findById(uid);
    if (user) {
      user.purchases.push({
        roadmapId: id,
        amount: 20,
        status: transactionStatus,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await user.save();
    } else {
      throw new Error("User not found.");
    }

    // Redirect based on transaction status
    const redirectUrl = transactionStatus === "SUCCESS" ? `${nextAuthUrl}/services` : `${nextAuthUrl}/failure`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  } catch (error: any) {
    console.error("Error in API request:", error.message);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`, { status: 301 });
  }
}
