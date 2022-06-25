import express from "express";

import {
  getProducts,
  createProduct,
  getProductsByUsr,
  updateProduct,
  deleteProduct,
} from "../controllers/product/product.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.get("/usr", auth, getProductsByUsr);
router.post("/", auth, createProduct);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);

export default router;
