const mongoose = require("mongoose");
const Post = require("../models/Post");

const getAllProducts = async (req, res) => {
  console.log(req.params.cat_id);
  try {
    const product = await Post.find({ category: req.params.cat_id }).populate(
      "owner"
    );
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateAllProducts = async (req, res) => {
  try {
    console.log(req.body);
    await Post.findByIdAndUpdate({ _id: req.params.id }, req.body);
    const products = await Post.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteProduct = async (req, res) => {
  console.log(req.params);
  try {
    await Post.findByIdAndDelete(req.params.id);
    const products = await Post.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ errors: [{ msg: "Server Error" }] });
  }
};

const getMyPosts = async (req, res) => {
  try {
    const myPosts = await Post.find({ owner: req.params.id });
    res.status(200).json(myPosts);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
};

//pagination----------------------------
const getProductsByGroup = async (req, res) => {
  try {
    // let start=req.header('start')
    const [catId, start] = req.params.query.split("-");
    const product = await Post.find({ category: catId }).populate("owner");
    let finalProduct = product.filter((el, i) => i >= +start && i < +start + 12);
    console.log(start)
    console.log(finalProduct.length)
    res.json(finalProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsNumber = async (req, res) => {
  // console.log('test');
  try {
    const product = await Post.find({ category: req.params.cat_id })
    res.json(product.length);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};



// const addproduct = async (req,res)=>{
//     try {
//         const newProduct = new Product(req.body)
//          newProduct.save()
//          const products = await Product.find({});
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Server Error"});
//     }
// }
// const getProductsBycollection = async (req,res)=>{
//     try {
//         const products = await Product.find({}).populate('category');
//         res.json(products);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Server Error"});
//     }
// }

module.exports = {
  getProductsNumber,
  getAllProducts,
  updateAllProducts,
  deleteProduct,
  getProductsByGroup,
  getMyPosts,
};
