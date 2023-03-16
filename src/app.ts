import express from "express";
import env from "dotenv";

const app = express();

env.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server running at http://localhost:${process.env.PORT}/`);
});
