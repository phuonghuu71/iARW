import express from "express";

import {
  getProducts,
  createProduct,
  getProductsByUsr,
  changeProductStatus,
  updateProduct,
  deleteProduct,
  updateViews,
  searchProducts,
} from "../controllers/product/product.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/usr", auth, getProductsByUsr);
router.post("/", auth, createProduct);
router.patch("/:id", auth, updateProduct);
router.patch("/update_view/:id", updateViews);
router.patch("/status/:id", auth, changeProductStatus);
router.delete("/:id", auth, deleteProduct);

export default router;
