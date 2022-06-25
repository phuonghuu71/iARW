import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fiveStepsStep = mongoose.Schema({
  stepName: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 10),
  },
});

export default mongoose.model("FiveStepsStep", fiveStepsStep);
