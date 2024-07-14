import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import User from '../../../../lib/models/users';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get('uid');
  const id = searchParams.get('id');

  if (!uid || !id) {
    return NextResponse.json({ message: "Missing uid or id" }, { status: 400 });
  }

  try {
    await dbConnect(); // Connect to MongoDB
    const user = await User.findOne({ _id: uid, 'purchases.roadmapId': id });

    if (!user) {
      return NextResponse.json({ status: "failure" }, { status: 404 });
    }

    const purchase = user.purchases.find((purchase) => purchase.roadmapId === id);

    if (purchase && purchase.status === "SUCCESS") {
      return NextResponse.json({ status: "success" }, { status: 200 });
    } else {
      return NextResponse.json({ status: "failure" }, { status: 200 });
    }
  } catch (error) {
    console.error("Error checking purchase status:", error);
    return NextResponse.json({ message: { error: error.message } }, { status: 500 });
  }
}
