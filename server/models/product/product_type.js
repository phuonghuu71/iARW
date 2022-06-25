import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productTypeSchema = Schema({
  typeName: { type: "string", required: true },
  createdAt: {
    type: Date,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 10),
  },
});

export default mongoose.model("ProductType", productTypeSchema);
