import { Schema, model, models } from "mongoose";

const RoadmapSchema = new Schema({
  roadmapId: {
    type: String,
    required: [true, "Roadmap ID is required"],
  },
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: ["PENDING", "SUCCESS", "FAILURE"],
    default: "PENDING",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  image: {
    type: String,
  },
  purchases: [RoadmapSchema],
});

const User = models.User || model("User", UserSchema);
export default User;
