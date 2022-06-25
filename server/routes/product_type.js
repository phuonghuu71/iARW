import express from "express";

import {
  getProductTypes,
  createProductType,
  updateProductType,
  deleteProductType,
  GetProductTypeById,
} from "../controllers/product/product_type.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProductTypes);
router.get("/:id", auth, GetProductTypeById);
router.post("/", auth, createProductType);
router.patch("/:id", auth, updateProductType);
router.delete("/:id", auth, deleteProductType);

export default router;
