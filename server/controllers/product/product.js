import express from "express";
import mongoose from "mongoose";

import Process from "../../models/product/5_steps_process/process.js";

import Product from "../../models/product/product.js";

const router = express.Router();

export const searchProducts = async (req, res) => {
  const { type, name, popular, latest, origin } = req.query;

  console.log(type, name, popular, latest, origin);

  let sort_by = {};

  if (popular === "true" && latest === "false") sort_by = { views: -1 };
  else if (popular === "false" && latest === "true")
    sort_by = { createdAt: -1 };
  else sort_by = {};

  try {
    const products = await Product.find({
      $and: [
        {
          prodName: name !== "undefined" && {
            $regex: `${name}`,
            $options: "i",
          },
        },
        {
          prodType: type !== "undefined" && {
            $regex: `${type}`,
            $options: "i",
          },
        },
      ],
    })
      .sort(sort_by)
      .populate("process_steps");

    const tmpProds = [];

    if (origin !== undefined) {
      origin.forEach((item) => {
        const { province_name } = JSON.parse(item);

        products.forEach((product) => {
          if (product.origin === province_name) tmpProds.push(product);
        });
      });
      res.status(200).json(tmpProds);
    } else {
      res.status(200).json(products);
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate("process_steps");

    // const processes = await Process.find({});

    // products.map((prod) => {
    //   prod.process_steps = processes.filter(
    //     (proc) => String(proc.productId) === String(prod._id)
    //   );
    //   return prod;
    // });

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
    img,
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
    status: "Chờ xác nhận",
    qty: qty,
    unit: unit,
    origin: origin,
    img: img,
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

export const changeProductStatus = async (req, res) => {
  const { id } = req.params;

  const { status } = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const updatedStatus = {
      status,
      updatedAt: new Date()
        .toLocaleString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" })
        .slice(0, 16)
        .replace("T", " "),
      _id: id,
    };

    await Product.findByIdAndUpdate(id, updatedStatus, { new: true });

    const getUpdatedProds = await Product.findById(id);

    // const processes = await Process.find({ productId: id });
    // getUpdatedProds.process_steps = processes;

    res.json(getUpdatedProds);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateViews = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const getProduct = await Product.findOne({ _id: id });

    const updatedView = parseInt(getProduct.views) + 1;

    const updatedProduct = {
      views: updatedView,
      _id: id,
    };

    await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

    res.status(200).send(`Update view: ${updatedView} views`);
  } catch (err) {
    res.status(404).json(err.message);
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
    qty,
    unit,
    createdAt,
    origin,
    img,
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
      status: "Chờ xác nhận",
      qty,
      unit,
      origin,
      createdAt,
      img,
      updatedAt: new Date()
        .toLocaleString("sv-SE", { timeZone: "Asia/Ho_Chi_Minh" })
        .slice(0, 16)
        .replace("T", " "),
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
