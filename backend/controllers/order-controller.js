import { asyncHandler } from "../middleware/asyncHandler.js";
import Order from "../models/order-model.js";

// @desc    Create new order
// @route   POST api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("addOrderItems ");
});

// @desc    Get logged in users order
// @route   GET api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("getMyOrders ");
});

// @desc    Get order by Id
// @route   GET api/orders/:id
// @access  Private
const getOrderById = asyncHandler(async (req, res) => {
  res.send("getOrderById ");
});

// @desc    Update order to paid
// @route   PUT api/orders/:id/pay
// @access  Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("updateOrderToPaid ");
});

// @desc    Update order to delivered
// @route   PUT api/orders/:id/deliver
// @access  Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("updateOrderToDelivered ");
});

// @desc    Get all orders
// @route   GET api/orders
// @access  Private/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all Orders ");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
