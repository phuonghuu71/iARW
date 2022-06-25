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

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

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
