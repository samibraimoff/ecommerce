import express from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/user-controller.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/profile").put(protect, updateUserProfile);
router.route("/").get(protect, admin, getUsers);
router.route("/:id").get(protect, admin, getUserById);
router.route("/:id").delete(protect, admin, deleteUserById);
router.route("/:id").put(protect, admin, updateUserById);

export default router;
