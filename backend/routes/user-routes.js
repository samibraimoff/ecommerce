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

const router = express.Router();

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(getUserProfile);
router.route("/profile").put(updateUserProfile);
router.route("/").get(getUsers);
router.route("/:id").get(getUserById);
router.route("/:id").delete(deleteUserById);
router.route("/:id").put(updateUserById);

export default router;
