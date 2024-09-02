import express from "express";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
dotenv.config();

const port = process.env.PORT;
const __dirname = path.resolve();

// Rest Object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json("success");
});

app.listen(8000, () => {
  console.log("server running on port: 8000".bgCyan.black);
});
