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

const Purchased = models.Purchased || model("Purchased", RoadmapSchema);
export default Purchased;
