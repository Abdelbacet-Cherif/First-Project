const express = require("express");
const router = express.Router();
const authMiddleware = require("../helpers/authMiddleware");
const Post = require("../models/Post");
// const upload = require("../helpers/multerStorage");

// //Add new post
// router.post("/", [upload.single("image"), authMiddleware], (req, res) => {
//   const url = "/uploads/" + req.file.filename;
//   let newPost = new Post({ ...req.body, owner: req.userId, image: url });
//   newPost
//     .save()
//     .then((post) => res.status(201).send(post))
//     .catch((err) => {
//       console.log(err.message);
//       res.status(500).send({ msg: "Server Error" });
//     });
// });
//Get All Posts
router.get("/", authMiddleware, (req, res) => {
  Post.find()
    .then((post) => res.send(post))
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "Server Error" });
    });
});
//Get user posts
router.get("/myPosts", authMiddleware, (req, res) => {
 
  Post.find({ owner: req.userId })
    .then((posts) => res.send(posts))
    .catch((err) => {
      console.log(err.message);
      res.statuts(500).send({ msg: "Server Error" });
    });
});
// router.post("/add", (req,res)=>{
//   let newpost=new Post(req.body)
//   newpost.save((err,post)=>{
//      err ? console.log(err) : res.status(200).json(post)
//   })
// })

module.exports = router;
