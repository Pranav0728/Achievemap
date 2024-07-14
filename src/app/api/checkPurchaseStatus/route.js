// Example backend endpoint in Next.js API route (/pages/api/checkPurchaseStatus.js)
import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get("uid");
  const id = searchParams.get("id");

  if (!uid || !id) {
    return new NextResponse(JSON.stringify({ status: "failure", message: "Missing uid or id" }), { status: 400 });
  }

  try {
    await dbConnect(); // Connect to MongoDB

    // Find the user with the specified uid
    const user = await User.findOne({ _id: uid });

    if (!user) {
      return new NextResponse(JSON.stringify({ status: "failure", message: "User not found" }), { status: 404 });
    }

    // Check if purchases array exists and contains the roadmapId
    if (!user.purchases || !user.purchases.some((purchase) => purchase.roadmapId === id)) {
      return new NextResponse(JSON.stringify({ status: "failure", message: "Roadmap not purchased" }), { status: 404 });
    }

    // Find the purchase object with roadmapId
    const purchase = user.purchases.find((purchase) => purchase.roadmapId === id);

    if (purchase && purchase.status === "SUCCESS") {
      return new NextResponse(JSON.stringify({ status: "success" }), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify({ status: "failure", message: "Purchase not successful" }), { status: 200 });
    }
  } catch (error) {
    console.error("Error checking purchase status:", error);
    return new NextResponse(JSON.stringify({ status: "failure", message: error.message }), { status: 500 });
  }
}
