import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProfile } from "../actions/authActions";
import "../css/Profile.css";

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
      <button className="buttonprofile" onClick={handleShow}>
        modifier
      </button>
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
            <label className="flex1">Prénom:</label>
            <input
              className="flex2"
              value={input.firstname}
              name="firstname"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex">
            <label className="flex1">Nom:</label>
            <input
              className="flex2"
              value={input.lastname}
              name="lastname"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex">
            <label className="flex1">Téléphone:</label>
            <input
              className="flex2"
              value={input.phone}
              name="phone"
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex">
            <label className="flex1">Email:</label>
            <input
              className="flex2"
              value={input.email}
              name="email"
              onChange={handleChange}
            ></input>
          </div>
        </Modal.Body>

        <Modal.Footer>
          {/* <Button variant="primary" onClick={handleClose}>
            Fermer
          </Button> */}
          <button className="buttonSave" onClick={handleSave}>
            Sauvgarder
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProfile;
