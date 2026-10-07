import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";

dotenv.config();

const app = express(); 

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SecureVault API is running",
  });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`SecureVault API running on port ${PORT}`);
  });
};

startServer();