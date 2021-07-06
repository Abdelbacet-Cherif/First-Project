import React from "react";
import villes from "../helpers/villeList";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import ListSubheader from "@material-ui/core/ListSubheader";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import { Col, Form } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const ListVilleDropdown = ({ handleVilleSearch, defaults }) => {
  const classes = useStyles();
  const handleChange = (e) => {
    handleVilleSearch && handleVilleSearch(e.target.value);
  };
  return (
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label className="label">Votre région*</Form.Label>
    <Form.Control
      className="inputtunis"
      required
      // custom
      as="select"
      native
      defaultValue=""
      id="grouped-native-select"
      onClick={handleChange}
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
    </Form.Control>
    </Form.Group>
    
  );
};

export default ListVilleDropdown;
