import express from "express";
import { registerUser ,loginUser ,getCurrentUser,  setup2FA, } from "../controllers/auth.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyJWT, getCurrentUser);
router.post("/2fa/setup", verifyJWT, setup2FA);
export default router;