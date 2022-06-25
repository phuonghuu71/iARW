import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fiveStepsNote = Schema({
  description: { type: String, required: true, default: "Empty" },
  createdAt: {
    type: Date,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 10),
  },
});

export default mongoose.model("FiveStepsNote", fiveStepsNote);
