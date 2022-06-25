import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = Schema({
  id: { type: String, required: true },
  familyName: { type: String, required: false },
  givenName: { type: String, required: false },
  imageUrl: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: true },
  role: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
  createdAt: {
    type: Date,
    default: new Date()
      .toISOString({ timeZone: "Asia/Ho_Chi_Minh" })
      .slice(0, 10),
  },
});

export default mongoose.model("User", userSchema);
