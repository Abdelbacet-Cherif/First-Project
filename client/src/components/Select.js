import React from 'react'
import { Form } from 'react-bootstrap'

const Select = () => {
    return (
        <div>
   <Form.Group>
  <Form.Control as="select" size="lg">
    <option>Large select</option>
  </Form.Control>
  <br />
  <Form.Control as="select">
    <option>Default select</option>
  </Form.Control>
  <br />
  <Form.Control size="sm" as="select">
    <option>Small select</option>
  </Form.Control>
</Form.Group>
        </div>
    )
}

export default Select
