import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import ListVille from './ListVilleDropdown'
import "../css/Search.css"
const Search = ({ handleSearchChange, handleVilleSearch }) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
    handleSearchChange(e.target.value)
  }
  return (
    <div>
      <Form.Control className="sear"  placeholder="Rechercher"  value={input} onChange={handleChange}></Form.Control>
      <ListVille handleVilleSearch={handleVilleSearch}></ListVille>
    </div>
  )
}

export default Search
