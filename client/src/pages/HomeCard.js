import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/HomeCard.css";
const HomeCard = ({ categorie }) => {
  // console.log("cat========>", categorie);
  return (
    <div  >
      <Container className="containersecond" >
        <Card className="cart">
          <Link  to={`/category/${categorie._id}`}>
            <Card.Img variant="top" src={categorie.image} />
          </Link>
          <Card.Body>
            {/* <Card.Title style={{ width: "80px", margin: "10px 100px 5px" }}>
            </Card.Title> */}
            <Link className="catego" to={`/category/${categorie._id}`}>
              {categorie.name}
            </Link>
            {/* <Card.Text>
              <br />
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Container>
      {/* <Card style={{ width: "18rem", height: "10rem" }}>
        <Card.Img style={{ width: "200px", margin: "20px 100px 10px" }} variant="top" src={categorie.image} />
        <Card.Body>
          <Card.Title>Annonces Chats</Card.Title>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default HomeCard;
