import { NextResponse } from "next/server";
import sha256 from "crypto-js/sha256";
import axios from "axios";

export async function POST(req) {
  const data = await req.formData();
  console.log(data);

  const status = data.get("code");
  const merchantId = data.get("merchantId");
  const transactionId = data.get("transactionId");

  const st = `/pg/v1/status/${merchantId}/${transactionId}${process.env.NEXT_PUBLIC_SALT_KEY}`;
  const dataSha256 = sha256(st).toString(); // Convert to string

  const checksum = `${dataSha256}###${process.env.NEXT_PUBLIC_SALT_INDEX}`;
  console.log(checksum);

  const options = {
    method: "GET",
    url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${transactionId}`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      "X-VERIFY": checksum,
      "X-MERCHANT-ID": merchantId,
    },
  };

  try {
    // CHECK PAYMENT STATUS
    const response = await axios.request(options);
    console.log("r===", response.data.code);

    if (response.data.code === "PAYMENT_SUCCESS") {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/success`, {
        status: 301,
      });
    } else {
      return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/failure`, {
        status: 301,
      });
    }
  } catch (error) {
    console.error("Error in API request:", error.response.data);
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/failure`, {
      status: 301,
    });
  }
}
