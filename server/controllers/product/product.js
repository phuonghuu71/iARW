import express from "express";
import mongoose from "mongoose";

import Product from "../../models/product/product.js";

const router = express.Router();

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProductsByUsr = async (req, res) => {
  const { prodUsr } = req.query;

  try {
    const products = await Product.find({
      prodUsr: prodUsr,
    });

    res.status(200).json({
      products: products,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  const {
    prodUsr,
    prodName,
    prodType,
    prodDescription,
    prodIngredient,
    origin,
    qty,
    unit,
  } = req.body;

  let generateGS1 = 0;

  const prod_size = await Product.countDocuments();

  // generate GS1
  // idea: latest + 1
  if (prod_size > 0) {
    const find_latest = await Product.findOne().sort({
      $natural: -1,
    });

    const { prodCode } = find_latest;

    generateGS1 = "VNC" + (parseInt(prodCode.substring(3)) + 1).toString();
  } else {
    generateGS1 = "VNC60000000";
  }

  const newProduct = new Product({
    prodUsr: prodUsr,
    prodName: prodName,
    prodType: prodType,
    prodDescription: prodDescription,
    prodIngredient: prodIngredient,
    prodCode: generateGS1,
    status: "Pending",
    qty: qty,
    unit: unit,
    origin: origin,
  });

  try {
    await newProduct.save();

    const products = await Product.find({
      prodUsr: prodUsr,
    });

    res.status(201).json({
      products: products,
    });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const {
    prodUsr,
    prodName,
    prodType,
    prodDescription,
    prodIngredient,
    prodCode,
    status,
    qty,
    unit,
    createdAt,
    origin,
  } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedProduct = {
      prodUsr,
      prodName,
      prodType,
      prodDescription,
      prodIngredient,
      prodCode,
      status,
      qty,
      unit,
      origin,
      createdAt,
      _id: id,
    };

    await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.json(updatedProduct);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Product.findByIdAndRemove(id);

  res.json({
    message: "Product deleted successfully",
  });
};

export default router;
