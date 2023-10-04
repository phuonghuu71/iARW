import jwt from "jsonwebtoken";

import User from "../models/user.js";

const secret = "bimat";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateRole = async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;

  try {
    const updatedUser = {
      role,
      _id: id,
    };

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    const getUpdatedUser = await User.findOne({ _id: id });

    res.status(200).json(getUpdatedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const user_auth = async (req, res) => {
  const { id, email, familyName, givenName, imageUrl } = req.body;

  const generateToken = (id, email, expire) => {
    return jwt.sign({ id: id, email: email }, secret, {
      expiresIn: `${expire}`,
    });
  };

  try {
    const oldUser = await User.findOne({ id });

    if (!oldUser) {
      const createUser = await User.create({
        id,
        email,
        familyName,
        givenName,
        imageUrl,
        role: "user",
      });
      const token = generateToken(createUser.id, createUser.email, "3h");
      res.status(201).json({
        result: createUser,
        token,
      });
    } else {
      const token = generateToken(oldUser.id, oldUser.email, "3h");
      res.status(200).json({
        result: oldUser,
        token,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(error);
  }
};
