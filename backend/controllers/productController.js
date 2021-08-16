const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// @desc:   Fetch all products
// @route:  GET /api/products
// @desc:   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc:   Fetch single products by id
// @route:  GET /api/products/:id
// @desc:   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = {
  getProducts,
  getProductById,
};
