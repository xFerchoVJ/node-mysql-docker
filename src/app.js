import express from "express";
const app = express();

app.get("/ping", async (req, res) => {
  res.json({msg: "Hola mundo"})
});

export default app;
