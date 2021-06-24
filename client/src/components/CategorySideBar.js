import { Link } from "react-router-dom";
import React from "react";
import { Row, Tab, Nav, Col } from "react-bootstrap";

const CategorySideBar = ({ categories }) => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {categories &&
                categories.map((elm) => (
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Link to={`/category/${elm._id}`}>{elm.name}</Link>
                    </Nav.Link>
                  </Nav.Item>
                ))}
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CategorySideBar;
