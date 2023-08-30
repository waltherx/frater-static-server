import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(PORT, () =>
  console.log(`⚡Static Server corriendo en el puerto: ${PORT}😎`)
);
