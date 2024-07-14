"use server";
import { v4 as uuidv4 } from "uuid";
import sha256 from "crypto-js/sha256";
import User from "@/lib/models/users";

export async function payment(amount, uid, id) {
  const transactionId = "Tr-" + uuidv4().toString(36).slice(-6);

  const payload = {
    merchantId: process.env.NEXT_PUBLIC_MERCHANT_ID,
    merchantTransactionId: transactionId,
    merchantUserId: "MUID-" + uuidv4().toString(36).slice(-6),
    amount: amount,
    redirectUrl: `https://achievemap.vercel.app/api/status/${transactionId}?uid=${uid}&id=${id}`,
    redirectMode: "POST",
    callbackUrl: `https://achievemap.vercel.app/api/status/${transactionId}?uid=${uid}&id=${uid}`,
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
  const dataSha256 = sha256(fullURL).toString();
  const checksum = `${dataSha256}###${process.env.NEXT_PUBLIC_SALT_INDEX}`;
  console.log("Checksum:", checksum);

  const UAT_PAY_API_URL = `https://api.phonepe.com/apis/hermes/pg/v1/pay`;
  console.log(UAT_PAY_API_URL);

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
    console.log("Response Data:", responseData);

    // Check if responseData contains the expected structure
    if (!responseData.data || !responseData.data.instrumentResponse || !responseData.data.instrumentResponse.redirectInfo) {
      throw new Error("Invalid response structure from payment API");
    }

    const redirect = responseData.data.instrumentResponse.redirectInfo.url;

    // Store initial transaction details in the database
    const user = await User.findOne({ _id: uid });

    if (user) {
      // If user record exists, update it with new purchase
      user.purchases.push({
        roadmapId: id,
        amount: amount,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await user.save();
    } else {
      console.log("Couldn't find user");
    }

    return { url: redirect };
  } catch (error) {
    console.error("Error:", error.message);
    throw error;
  }
}
