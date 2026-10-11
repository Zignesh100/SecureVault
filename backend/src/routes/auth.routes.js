import express from "express";
import { registerUser ,loginUser ,getCurrentUser } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyJWT, getCurrentUser);
export default router;