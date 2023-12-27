import User from "../models/user-model.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { generateToken } from "../utils/generate-token.js";
import dotenv from "dotenv";

dotenv.config();

// @desc    Auth user and get token
// @route   POST api/users/login
// @access  Private
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register new user and get token
// @route   POST api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});

// @desc    Logout user and clear cookies
// @route   POST api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully." });
});

// @desc    Get user profile
// @route   GET api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get profile");
});

// @desc    Update user profile
// @route   PUT api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc    Get all users
// @route   GET api/users
// @access  Private / Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc    Get user by ID
// @route   GET api/users/:id
// @access  Private / Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc    Delete user
// @route   DELETE api/users/:id
// @access  Private / Admin
const deleteUserById = asyncHandler(async (req, res) => {
  res.send("delete user by id");
});

// @desc    Update user
// @route   PUT api/users/:id
// @access  Private / Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.send("update user by id");
});

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
