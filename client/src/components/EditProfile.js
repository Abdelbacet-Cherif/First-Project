import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfile } from "../actions/authActions";

const EditProfile = ({ user }) => {
  const [input, setInput] = useState(user);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSave = () => {
    dispatch(updateProfile(input));
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        modifier
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <label>Prénom</label>
            <input
              value={input.firstname}
              name="firstname"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Nom</label>
            <input
              value={input.lastname}
              name="lastname"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Téléphone</label>
            <input
              value={input.phone}
              name="phone"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              value={input.email}
              name="email"
              onChange={handleChange}
            ></input>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProfile;
