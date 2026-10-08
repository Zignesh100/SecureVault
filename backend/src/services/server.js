import express from "express";
import dotenv from "dotenv";
import dns from "dns";
import connectDB from "../config/db.js";
import authRoutes from "../routes/auth.routes.js";
dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SecureVault API is running",
  });
});


app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`SecureVault API running on port ${PORT}`);
  });
};

startServer();