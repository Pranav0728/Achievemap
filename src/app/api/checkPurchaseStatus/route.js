// Example backend endpoint in Next.js API route (/pages/api/checkPurchaseStatus.js)

import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/users";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url, process.env.NEXTAUTH_URL);
  const uid = url.searchParams.get("uid");
  const id = url.searchParams.get("id");

  try {
    await dbConnect(); // Connect to MongoDB
    const user = await User.findOne({ _id: uid, 'purchases.roadmapId': id });

    if (!user) {
      return new NextResponse(JSON.stringify({ status: "failure" }), { status: 404 });
    }

    const purchase = user.purchases.find((purchase) => purchase.roadmapId === id);

    if (purchase.status === "SUCCESS") {
      return new NextResponse(JSON.stringify({ status: "success" }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ status: "failure" }), { status: 200 });
    }
  } catch (error) {
    console.error("Error checking purchase status:", error);
    return new NextResponse(JSON.stringify({ message: { error: error.message } }), { status: 500 });
  }
};
