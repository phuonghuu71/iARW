import express from "express";
const userRouter = express.Router();

import { user_auth } from "../controllers/user.js";

userRouter.post("/user_auth", user_auth);

export default userRouter;
