const express = require("express");
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const {
  getProducts,
  getProductById,
} = require("../controllers/productController");
const router = express.Router();

// @desc:   Fetch all products
// @route:  GET /api/products
// @desc:   Public
// router.get("/", getProducts);
router.route("/").get(getProducts);

// @desc:   Fetch single products by id
// @route:  GET /api/products/:id
// @desc:   Public
// router.get("/:id", getProductById);
router.route("/:id").get(getProductById);

module.exports = router;
