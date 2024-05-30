import express from "express";
import { loginUser, registerUser } from "../Controller/userController.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);

export default router;
