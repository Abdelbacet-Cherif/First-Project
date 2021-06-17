const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  updateAllProducts,
} = require("../controllers/productControler");
const authMiddleware = require("../helpers/authMiddleware");
const Post = require("../models/Post");
const upload = require("../helpers/multerStorage");

router.put("/:id", updateAllProducts);

module.exports = router;
