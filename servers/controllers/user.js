const User = require("../models/User");

const updateUser = async (req, res) => {
    console.log("hello")
  try {
    const updatedUser = await User.findByIdAndUpdate(req.body._id, req.body,{new:true});
    if (!updatedUser)
      return res.status(404).json({ errors: [{ msg: "user not found" }] });
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
};
module.exports = { updateUser };
