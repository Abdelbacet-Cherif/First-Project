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

import React, { useEffect, useState } from "react";
import { loadUser } from "../actions/authActions";
import { getAllCategorie } from "../actions/categorieActions";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import FeedCard from "./HomeCard";
import { createProduct } from "../actions/productActions";
import "./Feed.css";
const Feed = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    gender: "",
    city: "",
    image: null,
    category: "60ca061f7961083658eb800b",
    description: "",
  });
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllCategorie());
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setData({ ...data, image: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const keys = Object.keys(data);
    let filesArray = Object.values(data.image);
    // formData.append("image", filesArray);
    filesArray.map((file) => formData.append('image', file));
    keys.map((el) => formData.append(el, data[el]));

    dispatch(createProduct(formData));
  };

  return (
    <div className="multer color espace">
      <div>
        <img src="./images/multer.png" className="rossi" />
      </div>

      <div className="log">
        <h4 className="create">Ajoutez une annonce</h4>
        <Form className="label">Titre *</Form>
        <Form className="label" onSubmit={handleSubmit}>
          <FormControl className="input" name="title" onChange={handleChange} />
          <Form className="label">Genre *</Form>
          <FormControl
            className="input"
            name="gender"
            onChange={handleChange}
          />
          <Form className="label">Prix *</Form>
          <FormControl className="input" name="price" onChange={handleChange} />
          <Form className="label">Ville *</Form>
          <FormControl className="input" name="city" onChange={handleChange} />
          <Form.Group
            className="input1"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label className="label">Texte de votre annonce *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
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

          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            onChange={handleChange}
            name="category"
            custom
          >
            <option value="0">Choisir...</option>
            {categories &&
              categories.map((el) => <option value={el._id}>{el.name}</option>)}
          </Form.Control>

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
          <input type="file" onChange={handleImage} multiple />
          <input
            className="btn btn-md btn-secondary"
            type="submit"
            value="add new product"
          />
        </Form>
      </div>
    </div>
  );
};

export default Feed;
