import bodyParser from "body-parser";
import express from "express";
import UserRouter from "./routes/userRoutes.js";

const app = express();
import "./config/db.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/users", UserRouter);
export default app;
