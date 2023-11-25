import User from "../models/user-model.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

// @desc    Auth user and get token
// @route   POST api/users/login
// @access  Private
const loginUser = asyncHandler(async (req, res) => {
  res.send("login");
});

// @desc    Register new user and get token
// @route   POST api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register");
});

// @desc    Logout user and clear cookies
// @route   POST api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout");
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
  res.send("delete user");
});

// @desc    Update user
// @route   PUT api/users/:id
// @access  Private / Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.send("update user");
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
