// const express = require("express");
// const router = express.Router();
// const { getAll}=require("../controllers/collection")
// router.get("/", getAll)
// module.exports = router;

const express = require("express");
const router = express.Router();
const Categorie = require("../models/Category");
const { getAllCategorie } = require("../controllers/categorie");

//Get All categories :
router.get("/", getAllCategorie);
//Post new categorie :
router.post("/", (req, res) => {
  let newCategorie = new Categorie({ ...req.body });
  newCategorie
    .save()
    .then((categorie) => res.status(200).send(categorie))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ errors: [{ msg: "Server Error" }] });
    });
});

module.exports = router;
