import jwt from "jsonwebtoken";

import User from "../models/user.js";

const secret = "bimat";

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
