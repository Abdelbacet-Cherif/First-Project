// import React, { useEffect } from "react";
// import { loadUser } from "../actions/authActions";
// import { useDispatch, useSelector } from "react-redux";
// const Feed = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   useEffect(() => {
//     dispatch(loadUser());
//   }, []);
//   return (
//     <div>
//       <h1>FEED PAGE</h1>
//       {auth.user && <p>Hello {auth.user.firstname}</p>}
//     </div>
//   );
// };

// export default Feed;

import React, { useEffect, useRef, useState } from 'react'
import { loadUser } from '../actions/authActions'
import { getAllCategorie } from '../actions/categorieActions'
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormControl, ListGroup } from 'react-bootstrap'
import FeedCard from './HomeCard'
import { createProduct } from '../actions/productActions'
import './Feed.css'
import ListVilleDropdown from '../components/ListVilleDropdown'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
const Feed = ({ history }) => {
  // const notify = () => {
  //   toast.success('Votre annonces bien poster', { autoClose: false })
  // }

  const title = useRef()
  const [data, setData] = useState({
    title: '',
    price: '',
    gender: '',
    city: '',
    image: null,
    category: '',
    description: '',
  })
  const [valideForm, setvalideForm] = useState(false)
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const { categories } = useSelector((state) => state.categories)
  useEffect(() => {
    dispatch(loadUser())
    dispatch(getAllCategorie())
  }, [])
  useEffect(() => {
    if (auth.isAuth === false) history.push('/')
  }, [auth.isAuth])
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    // validation();
  }

  const handleImage = (e) => {
    setData({ ...data, image: e.target.files })
    // validation();
  }
  const handleVilleSearch = (value) => {
    setData({ ...data, city: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    const keys = Object.keys(data)
    let filesArray = Object.values(data.image)
    // formData.append("image", filesArray);
    filesArray.map((file) => formData.append('image', file))
    keys.map((el) => formData.append(el, data[el]))

    dispatch(createProduct(formData))
    history.push('/profile')
  }
  const handleAdd = (e) => {
    if (
      data.title &&
      data.price &&
      data.gender &&
      data.city &&
      data.image &&
      data.category
    ) {
      const conf = window.confirm('Votre annonces bien poster ')
      if (conf) {
        handleSubmit(e)
      }
    }
  }
  // const validation = () => {
  //   title.current.value !== "" ? setvalideForm(true) : setvalideForm(false);
  // };
  return (
    <div className="multer color espace">
      <div>
        <img src="./images/multer.png" className="rossi" />
      </div>

      <div className="log">
        <h4 className="create">Ajoutez une annonce</h4>
        <Form className="label">Titre *</Form>
        <Form className="label" onSubmit={handleSubmit}>
          <FormControl
            required
            className="input"
            // ref={title}
            name="title"
            onChange={handleChange}
          />
          <Form className="label">Genre *</Form>
          <FormControl
            required
            className="input"
            name="gender"
            onChange={handleChange}
          />
          <Form className="label">Prix *</Form>
          <FormControl
            required
            className="input"
            name="price"
            onChange={handleChange}
          />
          {/* <Form className="label">Ville *</Form>
          <FormControl required className="input" name="city" onChange={handleChange} /> */}
          <ListVilleDropdown
            required
            defaults={true}
            handleVilleSearch={handleVilleSearch}
          />

          <label className="label">T??lephone *</label>
          <FormControl
            required
            className="input"
            name="phone"
            onChange={handleChange}
          />
          <Form.Label className="label">Texte de votre annonce</Form.Label>
          <Form.Control
            className="input"
            as="textarea"
            rows={3}
            name="description"
            onChange={handleChange}
          />

          {/* <div className="input">
            <label htmlFor="exampleFormControlTextarea1">
            Texte de votre annonce *
            </label> 
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            />
        </div> */}

          {/* <Form.Group as={Col} controlId="formGridState">
        <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
      </Form.Group> */}
          {/* <Form.Control as="select">
    <option>Default select</option>
  </Form.Control> */}
          <label className="label">Choisir votre annonces*</label>

          <Form.Group className="ds">
            <ListGroup.Item
              className="inputtunis1"
              // htmlFor="grouped-native-select"
              // id="grouped-native-select"
              as="select"
              // className="my-1 mr-sm-2"
              // id="inlineFormCustomSelectPref"
              onChange={handleChange}
              name="category"
              custom
              required
            >
              <option value="0 " required>
                Choisir...
              </option>
              {categories &&
                categories.map((el) => (
                  <option value={el._id}>{el.name}</option>
                ))}
            </ListGroup.Item>

            {/* <select
            defaultValue="choisir"
            onChange={handleChange}
            name="category"
          >
            {categories &&
              categories.map((el) => <option value={el._id}>{el.name}</option>)}
          </select> */}
            {/* <Form.Control
            as="select"
            className="mr-sm-2"
            id="inlineFormCustomSelect"
            single
            type="file"
            onChange={handleImage}
          >
            <option value="0">Choisir...</option>
            {categories &&
              categories.map((el) => <option value={el._id}>{el.name}</option>)}
          </Form.Control> */}
            {/* <Form className="label">Photos de votre annonce *</Form> */}
            {/* <Form.File
            className="position-relative"
            required
            name="file"
            feedbackTooltip
            onChange={handleImage}
            multiple
          /> */}
            <Form.File
              className="position1"
              required
              onChange={handleImage}
              // id="validationFormik107"
              feedbackTooltip
              multiple
            />
          </Form.Group>
          <input
            // disabled={!valideForm}
            className="btn btn-md btn-secondary"
            type="submit"
            value="Ajouter votre annonce"
            // onClick={() => {
            //   notify()
            // }}
            onClick={(e) => {
              // notify()
              // handleShows()
              handleAdd(e)
            }}
          />
          {/* <ToastContainer /> */}

          {/* <h4 style={{ visibility: valideForm ? "hidden" : "visible" }}>
            veuillhghhhg yyggyhg
          </h4> */}
        </Form>
      </div>
    </div>
  )
}

export default Feed
