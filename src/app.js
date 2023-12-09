import bodyParser from "body-parser";
import express from "express";
const app = express();
import "./config/db.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", async (req, res) => {
  res.json({ msg: "Hola mundo" });
});

export default app;
