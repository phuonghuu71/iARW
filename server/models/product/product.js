import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = Schema({
  prodUsr: { type: Schema.Types.ObjectId, ref: "User", required: true },
  prodName: { type: String, required: true },
  prodDescription: { type: String, required: false, default: "Empty" },
  prodIngredient: { type: String, required: false, default: "Empty" },
  prodCode: { type: String, required: true },
  status: { type: String, required: true },
  qty: { type: Number, required: false },
  unit: { type: String, required: false },
  origin: { type: String, required: false },
  prodType: { type: Schema.Types.ObjectId, ref: "ProductType", required: true },
  process_steps: [{ type: Schema.Types.ObjectId, ref: "FiveStepsProcess" }],
  createdAt: {
    type: String,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 16)
      .replace("T", " "),
  },
});

export default mongoose.model("Product", productSchema);
