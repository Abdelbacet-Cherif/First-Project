const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  deleteProduct,
  updateAllProducts,
  getProductsByGroup,
  getProductsNumber,
} = require('../controllers/productControler')
const authMiddleware = require('../helpers/authMiddleware')
const Post = require('../models/Post')
const upload = require('../helpers/multerStorage')

//Add new post
router.post('/', [upload.array('image', 10), authMiddleware], (req, res) => {
  let productList = req.files.map(
    (file) => (path = '/uploads/' + file.filename),
  )
  console.log(productList)
  // const url = "/uploads/" + req.file.filename;
  let newPost = new Post({
    ...req.body,
    owner: req.userId,
    image: productList,
  })
  newPost
    .save()
    .then((post) => res.status(201).send(post))
    .catch((err) => {
      console.log(err.message)
      res.status(500).send({ msg: 'Server Error' })
    })
})

router.get('/:cat_id', getAllProducts)
router.delete('/delete/:id', deleteProduct)
router.put('/:id', updateAllProducts)
router.get('/api/:query', getProductsByGroup)
router.get('/number/:cat_id', getProductsNumber)
router.get('/getProduct/:id', async (req, res) => {
  try {
    res.json(post)
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
  const post = await Post.findById(req.params.id)
  res.json(post)
})

module.exports = router
