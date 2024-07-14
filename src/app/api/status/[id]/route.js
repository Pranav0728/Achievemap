import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import User from "@/lib/models/users";

export async function POST(req) {
  try {
    const url = new URL(req.url);
    const uid = url.searchParams.get("uid");
    const id = url.searchParams.get("id");

    if (!uid || !id ) {
      throw new Error("Invalid parameters or roadmap not found.");
    }

    const data = await req.formData();
    console.log("Form Data:", data);

    const merchantId = process.env.NEXT_PUBLIC_MERCHANT_ID;
    const transactionId = data.get("transactionId");

    // Generate checksum
    const st = `/pg/v1/status/${merchantId}/${transactionId}${process.env.NEXT_PUBLIC_SALT_KEY}`;
    const dataSha256 = sha256(st).toString();
    const checksum = `${dataSha256}###${process.env.NEXT_PUBLIC_SALT_INDEX}`;
    console.log("Checksum:", checksum);

    // Prepare API request to check payment status
    const options = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_UAT_ID}/pg/v1/status/${merchantId}/${transactionId}`,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
        "X-MERCHANT-ID": merchantId,
      },
    };

    // Check payment status
    const response = await axios.request(options);
    console.log("Payment status:", response.data.code);

    // Ensure response.data exists before accessing properties
    if (!response || !response.data) {
      throw new Error("Failed to fetch payment status.");
    }

    // Determine transaction status based on API response
    const transactionStatus = response.data.code === "PAYMENT_SUCCESS" ? "SUCCESS" : "FAILURE";

    // Update user's purchase status in database
    const updatedUser = await User.findOneAndUpdate(
      { _id: uid, 'purchases.roadmapId': id },
      { $set: { 'purchases.$.status': transactionStatus, 'purchases.$.updatedAt': new Date() } },
      { new: true }
    );

    if (!updatedUser) {
      console.error(`User ${uid} or purchase ${id} not found.`);
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/failure`, { status: 301 });
    }

    // Redirect based on transaction status
    const redirectUrl = transactionStatus === "SUCCESS" ? `${process.env.NEXTAUTH_URL}/services` : `${process.env.NEXTAUTH_URL}/failure`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  } catch (error) {
    console.error("Error in API request:", error.message);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/failure`, { status: 301 });
  }
}
