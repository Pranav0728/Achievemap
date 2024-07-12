"use server";
import { v4 as uuidv4 } from "uuid";
import sha256 from "crypto-js/sha256";

export async function payment(amount) {
  const transactionid = "Tr-" + uuidv4().toString(36).slice(-6);

  const payload = {
    merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
    merchantTransactionId: transactionid,
    merchantUserId: "MUID-" + uuidv4().toString(36).slice(-6),
    amount: amount,
    redirectUrl: `${process.env.NEXTAUTH_URL}/api/status/${transactionid}`,
    redirectMode: "POST",
    callbackUrl: `${process.env.NEXTAUTH_URL}/api/status/${transactionid}`,
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  const dataPayload = JSON.stringify(payload);
  console.log("Payload:", dataPayload);

  const dataBase64 = Buffer.from(dataPayload).toString("base64");
  console.log("Base64 Payload:", dataBase64);

  const fullURL = dataBase64 + "/pg/v1/pay" + process.env.NEXT_PUBLIC_SALT_KEY;
  const dataSha256 = sha256(fullURL);
  const checksum = dataSha256 + "###" + process.env.NEXT_PUBLIC_SALT_INDEX;
  console.log("Checksum:", checksum);

  const UAT_PAY_API_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

  try {
    const response = await fetch(UAT_PAY_API_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-VERIFY": checksum,
      },
      body: JSON.stringify({ request: dataBase64 }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Something went wrong");
    }

    const responseData = await response.json();
    const redirect = responseData.data.instrumentResponse.redirectInfo.url;
    return { url: redirect };
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
