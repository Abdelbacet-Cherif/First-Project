import React, { useState } from 'react'
import { Alert, Button, Modal, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletes, update } from '../actions/productActions'
import '../css/Profile.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const EditPost = ({ el, catId }) => {
  // const notify = () => {
  //   toast.error('Votre poste était effacé', { autoClose: 2500 })
  // }
  const auth = useSelector((state) => state.auth)
  const [input, setinput] = useState({
    title: el.title,
    gender: el.gender,
    city: el.city,
    price: el.price,
    description: el.description,
    phone: el.phone,
    image: el.image,
  })
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
  }
  const handleDelete = () => {
    const conf = window.confirm('confirmer la suppression? ')
    if (conf) {
      dispatch(deletes(el._id, catId))
    }
  }
  const handleSave = () => {
    dispatch(update(el._id, input, catId))
    handleClose()
  }

  // const [shows, setshows] = useState(false)
  // const handleShows = () => setshows(!shows)

  return (
    <div>
      {auth.user && auth.user._id === (el.owner._id || el.owner) && (
        <>
          <button className="buttonup" onClick={handleShow}>
            modifier
          </button>
          <button
            className="buttonsup"
            onClick={() => {
              // notify()
              // handleShows()
              handleDelete()
            }}
          >
            Effacer
          </button>
          {/* <ToastContainer limit={0} /> */}
          {/* <Toast show ={shows}>
            <Toast.Header> */}
          {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
          {/* <strong className="me-auto">Bootstrap</strong>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast> */}
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
            {' '}
            <label className="flex1">Ville:</label>
            <input
              className="flex2"
              name="city"
              value={input.city}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex">
            {' '}
            <label className="flex1">Prix:</label>
            <input
              className="flex2"
              name="price"
              value={input.price}
              onChange={handleChange}
            ></input>
          </div>
          <div className="flex">
            {' '}
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
          <button className="buttonSave" onClick={handleSave}>
            Sauvgarder
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditPost
