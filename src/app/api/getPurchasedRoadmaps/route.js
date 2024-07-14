import dbConnect from "../../../lib/dbConnect";
import User from "../../../lib/models/users";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const url = new URL(req.url, process.env.NEXTAUTH_URL);
    const uid = url.searchParams.get("uid");

  try {
    await dbConnect(); // Connect to MongoDB
    const user = await User.findOne({ _id: uid });

    if (!user) {
      return new NextResponse(JSON.stringify({ roadmaps: [] }), { status: 404 });
    }

    const purchasedRoadmaps = user.purchases.map((purchase) => ({
      roadmapId: purchase.roadmapId,
      status: purchase.status,
    }));

    return new NextResponse(JSON.stringify({ roadmaps: purchasedRoadmaps }), { status: 200 });
  } catch (error) {
    console.error("Error fetching purchased roadmaps:", error);
    return new NextResponse(JSON.stringify({ message: { error: error.message } }), { status: 500 });
  }
};
