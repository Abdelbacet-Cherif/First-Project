import React, { useState } from "react";
import ListVille from "./ListVilleDropdown";

const Search = ({ handleSearchChange, handleVilleSearch }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    handleSearchChange(e.target.value);
  };
  return (
    <div>
      <ListVille handleVilleSearch={handleVilleSearch}></ListVille>
      <input type="search" value={input} onChange={handleChange}></input>
    </div>
  );
};

export default Search;
