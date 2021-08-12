const express = require("express");
const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const router = express.Router();

// @desc:   Fetch all products
// @route:  GET /api/products
// @desc:   Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc:   Fetch single products by id
// @route:  GET /api/products/:id
// @desc:   Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.param.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  })
);

module.exports = router;
