import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fiveStepsProcess = Schema({
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  step: { type: String, required: true, default: "Empty" },
  note: { type: String, required: true, default: "Empty" },
  description: { type: String, required: true, default: "Empty" },
  createdAt: {
    type: String,
    default: new Date()
      .toLocaleString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 16)
      .replace("T", " "),
  },
  updatedAt: {
    type: String,
    default: new Date()
      .toLocaleString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 16)
      .replace("T", " "),
  },
});

export default mongoose.model("FiveStepsProcess", fiveStepsProcess);
