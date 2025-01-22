import express from "express";
import { getUserData, updateUser } from "../jobs/gameLogic.js";

const router = express.Router();

router.get("/user", getUserData); // Fetch user data
router.post("/update", updateUser); // Update user data

export default router;
