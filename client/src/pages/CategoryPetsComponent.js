import React from "react";
import "./CategoryPets.css";
import { Modal, Button, Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletes, update } from "../actions/productActions";
import EditPost from "../components/EditPost";
const CategoryPetsComponent = ({ el, catId }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const [input, setinput] = useState({
    title: el.title,
    gender: el.gender,
    city: el.city,
    price: el.price,
    description: el.description,
    phone: el.phone,
    image: el.image,
  });

  const [index, setIndex] = useState(0);

  //functions ============
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleDelete = () => {
    dispatch(deletes(el._id, catId));
  };

  return (
    <div>
      <div className="car1" style={{ width: "150px" }}>
        <Carousel
          style={{ height: "140px" }}
          activeIndex={index}
          onSelect={handleSelect}
        >
          {el.image &&
            el.image.map((img) => (
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
        </Carousel>
        {/* <img
          src={process.env.REACT_APP_STORAGE_URL + el.image[0]}
          width="150"
        /> */}
        <p>
          <strong>Titre: </strong>
          {el.title}
        </p>
        <p>
          <strong>Genre: </strong>
          {el.gender}
        </p>
        <p>
          {" "}
          <strong>Ville: </strong>
          {el.city}
        </p>
        <p>
          <strong>Prix: </strong>
          {el.price}
        </p>
        <p>
          <strong>Description: </strong>
          {el.description}
        </p>
        <span>
          <strong>Téléphone: </strong>
          {el.phone}
        </span>
        {/* modal */}
        {/* {auth.user && auth.user._id === el.owner._id && (
          <>
            <Button variant="primary" onClick={handleShow}>
              modifier
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              {" "}
              Delete
            </Button>
          </>
        )}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={handleClose}
            ></button>
          </Modal.Header>
          <Modal.Body>
            <div className="flex">
              <label className="flex1">Titre:</label>
              <input
                className="flex2"
                name="title"
                value={input.title}
                onChange={handleChange}
              ></input>
            </div>

            <div className="flex">
              <label className="flex1">Genre: </label>
              <input
                className="flex2"
                name="gender"
                value={input.gender}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              {" "}
              <label className="flex1">Ville:</label>
              <input
                className="flex2"
                name="city"
                value={input.city}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              {" "}
              <label className="flex1">Prix:</label>
              <input
                className="flex2"
                name="price"
                value={input.price}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              {" "}
              <label className="flex1">Description:</label>
              <input
                className="flex2"
                name="description"
                value={input.description}
                onChange={handleChange}
              ></input>
            </div>
            <div className="flex">
              <label className="flex1">Téléphone: </label>
              <input
                className="flex2"
                name="phone"
                value={input.phone}
                onChange={handleChange}
              ></input>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={
                (handleClose, () => dispatch(update(el._id, input, catId)))
              }
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
        <EditPost el={el} catId={catId} />
      </div>
    </div>
  );
};

export default CategoryPetsComponent;
