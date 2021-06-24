import React from "react";
import villes from "../helpers/villeList";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Toute la Tunisie </InputLabel>
      <Select
        native
        defaultValue=""
        id="grouped-native-select"
        onClick={handleChange}
      >
        <optgroup label="Toute la Tunisie">
          {/* <option aria-label="None" value=""></option> */}
          {!defaults && (
            <option aria-label="None" value="">
              Toute la Tunisie
            </option>
          )}
          {villes.sort().map((el, i) => (
            <option value={el}>{el}</option>
          ))}
        </optgroup>
      </Select>
    </FormControl>
  );
};

export default ListVilleDropdown;
