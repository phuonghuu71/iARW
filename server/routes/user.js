import express from "express";
const userRouter = express.Router();

import { user_auth, getUsers, updateRole } from "../controllers/user.js";

userRouter.post("/user_auth", user_auth);
userRouter.patch("/role/:id", updateRole);
userRouter.get("/", getUsers);

export default userRouter;
