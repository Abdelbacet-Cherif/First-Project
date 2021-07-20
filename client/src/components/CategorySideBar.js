import { Link } from 'react-router-dom'
import React from 'react'
import { Row, Tab, Nav, Col } from 'react-bootstrap'
import '../css/CategorySideBar.css'

const CategorySideBar = ({ categories, changefilt }) => {
  return (
    <div className="nav01">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col>
            <Nav variant="pills" className="flex-column">
              {categories &&
                categories.map((elm) => (
                  <Nav.Link className="nav01" eventKey="first">
                    <Link className="lin " to={`/category/${elm._id}`}>
                      {elm.name}
                    </Link>
                  </Nav.Link>
                ))}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  )
}

export default CategorySideBar
