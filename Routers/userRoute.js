import express from "express";
import { getuser, loginUser, registerUser } from "../Controller/userController.js";
import authMiddleware from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/register-user", registerUser);
router.post("/login-user", loginUser);
 router.get("/get-user",authMiddleware,getuser)

export default router;
