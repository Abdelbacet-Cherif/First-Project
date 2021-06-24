const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/user");

router.put("/editprofile", updateUser);

module.exports = router;
