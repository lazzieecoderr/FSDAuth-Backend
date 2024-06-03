import express from "express";
import { forgotPassword, getuser, loginUser, registerUser, resetPassword } from "../Controller/userController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
 router.get("/get-user",authMiddleware,getuser)
 router.post("/forgot-password",forgotPassword);
 router.post("/reset-password/:id/:token",resetPassword);

export default router;
