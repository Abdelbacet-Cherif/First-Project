import React, { useState } from 'react'
import villes from '../helpers/villeList'
import { makeStyles } from '@material-ui/core/styles'
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import { Col, Form, ListGroup, Modal, Tab, Table, Tabs } from 'react-bootstrap'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))
const ListVilleDropdown = ({ handleVilleSearch, defaults }) => {
  const classes = useStyles()

  const handleChange = (e) => {
    handleVilleSearch && handleVilleSearch(e.target.value)
  }
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    // <div>
    //   <button  onClick={handleShow}>
    //     modifier
    //   </button>
    //   <Modal show={show} onHide={handleClose}>
    //     <Modal.Header>
    //       <button> gfshh</button>
    //     </Modal.Header>
    //     <Modal.Body>
    //     {/* // <Form.Group as={Col} controlId="formGridState"> */}
    // {/* //   <Form.Label className="label">Votre région*</Form.Label> */}
    //  <Tab.Container
    //     className="inputtunis "
    //     required
    //     // custom
    //     as="select"
    //     native
    //     defaultValue=""
    //     controlId="grouped-native-select"
    //     onChange={handleChange}
    //     htmlFor="grouped-native-select"
    //   >
    //     <optgroup label="Toute la Tunisie">
    //       <option value="0">Toute la Tunisie</option>

    //       {/* <option aria-label="None" value=""></option> */}
    //       {!defaults && (
    //         <option label="Toute la Tunisie" aria-label="None" value="0">
    //           Toute la Tunisie
    //         </option>
    //       )}

    //       {villes.sort().map((el, i) => (
    //         <option value={el}>{el}</option>
    //       ))}
    //     </optgroup>
    //   </Tab.Container>
    // {/* </Form.Group> */}
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <button className="buttonSave">Sauvgarder</button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label className="label">Votre région*</Form.Label>
      <ListGroup.Item
        className="inputtunis"
        required
        // custom
        as="select"
        native
        defaultValue=""
        controlId="grouped-native-select"
        onChange={handleChange}
        htmlFor="grouped-native-select"
      >
        <optgroup label="Toute la Tunisie">
          <option value="0">Toute la Tunisie</option>

          {/* <option aria-label="None" value=""></option> */}
          {!defaults && (
            <option label="Toute la Tunisie" aria-label="None" value="0">
              Toute la Tunisie
            </option>
          )}

          {villes.sort().map((el, i) => (
            <option value={el}>{el}</option>
          ))}
        </optgroup>
      </ListGroup.Item>
    </Form.Group>
  )
}

export default ListVilleDropdown
