const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "category",
  },
  title: String,
  gender: String,
  image: [String],
  city: String,
  price: String,
  phone:String,
  description: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
