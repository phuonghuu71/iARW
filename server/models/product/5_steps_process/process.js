import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fiveStepsProcess = Schema({
  fiveStepsStepId: { type: Schema.Types.ObjectId, ref: "FiveStepsStep" },
  fiveStepsNotes: [{ type: Schema.Types.ObjectId, ref: "FiveStepsNote" }],
  description: { type: String, required: true, default: "Empty" },
  createdAt: {
    type: Date,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 10),
  },
});

export default mongoose.model("FiveStepsProcess", fiveStepsProcess);
