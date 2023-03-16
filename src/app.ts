require("dotenv").config();

const express = require("express");
const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("boop");
});

