import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import stepRouter from "./routes/step.js";
import noteRouter from "./routes/note.js";
import processRouter from "./routes/process.js";
import productRouter from "./routes/product.js";
import productTypeRouter from "./routes/product_type.js";
import { Server } from "socket.io";

const app = express();

app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(cors());

app.use("/user", userRouter);
app.use("/step", stepRouter);
app.use("/note", noteRouter);
app.use("/process", processRouter);
app.use("/product", productRouter);
app.use("/product_type", productTypeRouter);

const CONNECTION_URL =
  "mongodb+srv://admin:IXWJMvGKoKPuDpDe@iarw.6km3y.mongodb.net/iARW?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// io
const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (user, socketId) => {
  const {
    result: { _id },
  } = user;
  !onlineUsers.some((user) => user.user.result._id === _id) &&
    onlineUsers.push({ user, socketId });
};

const removeUser = (_id) => {
  onlineUsers = onlineUsers.filter((user) => {
    return user.user.result._id !== _id;
  });
};

const getUser = (_id) => {
  return onlineUsers.find((user) => user._id === _id);
};

io.on("connection", (socket) => {
  socket.on("newUser", (user) => {
    addNewUser(user, socket.id);
    io.emit("getUsers", onlineUsers);
  });

  socket.on("sendNotification", (props) => {
    console.log(props);
    const { senderName, receiverName, type } = props;
    const receiver = getUser(receiverName);
    io.to(receiver?.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("join_room", (data) => {
    socket.join("common");
    io.emit("getUsers", onlineUsers);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to("common").emit("receive_message", data);
  });

  socket.on("logout", (_id) => {
    removeUser(_id);

    io.emit("getUsers", onlineUsers);
  });
});

io.listen(7000);
// io
