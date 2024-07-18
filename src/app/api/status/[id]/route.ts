import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import User from "@/lib/models/users";
import dbConnect from "@/lib/dbConnect";

export async function POST(req:Request) {
  try {
    const purl = new URL(req.url);
    console.log("purl "+purl)
    const durl = purl.href;
    console.log("durl "+durl)
    const uid = purl.searchParams.get("uid");
    console.log("uid "+uid)
    const roadmapid = purl.searchParams.get("roadmapid");
    console.log("roadmapid "+roadmapid)

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
    console.log("response "+ response.data.uid)
    console.log("response "+ response.data.id)

    // Ensure response.data exists before accessing properties
    if (!response || !response.data) {
      throw new Error("Failed to fetch payment status.");
    }

    // Determine transaction status based on API response
    const transactionStatus = response.data.code === "PAYMENT_SUCCESS" ? "SUCCESS" : "FAILURE";
      console.log(transactionStatus)
    // Update user's purchase status in database
    await dbConnect();
    const user = await User.findOne({ _id: uid });
    if (user) {
      user.purchases.push({
        roadmapId: roadmapid,
        amount:20,
        status: transactionStatus,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await user.save();
    } else {
      console.log("Couldn't find")
    }

    // Redirect based on transaction status
    const redirectUrl = transactionStatus === "SUCCESS" ? `${process.env.NEXTAUTH_URL}/services` : `${process.env.NEXTAUTH_URL}/failure`;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  } catch (error:any) {
    console.error("Error in API request:", error.message);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`, { status: 301 });
  }
}
