import express from "express";
import mongoose from "mongoose";

import ProductType from "../../models/product/product_type.js";

const router = express.Router();

export const getProductTypes = async (req, res) => {
  try {
    const ProductTypes = await ProductType.find();

    res.status(200).json(ProductTypes);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const GetProductTypeById = async (req, res) => {
  const { id } = req.params;

  try {
    const ProductTypeById = await ProductType.findById(id);
    res.status(200).json(ProductTypeById);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProductType = async (req, res) => {
  const { typeName } = req.body;

  const newProductType = new ProductType({
    typeName,
  });

  try {
    await newProductType.save();

    res.status(201).json(newProductType);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProductType = async (req, res) => {
  const { id } = req.params;

  const { typeName } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedProductType = { typeName, _id: id };

  await ProductType.findByIdAndUpdate(id, updatedProductType, { new: true });

  res.json(updatedProductType);
};

export const deleteProductType = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await ProductType.findByIdAndRemove(id);

  res.json({
    message: "ProductType deleted successfully.",
  });
};

export default router;
