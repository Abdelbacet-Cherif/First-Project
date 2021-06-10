const express = require("express");
const router = express.Router();
const { getAll}=require("../controllers/collection")


router.get("/", getAll)

module.exports = router;