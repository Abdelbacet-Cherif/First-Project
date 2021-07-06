import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/HomeCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

    
const HomeCard = ({ categorie, color }) => {
  useEffect(()=> {
    AOS.init({duration:2000});
  },[])
  // console.log("cat========>", categorie);
  return (
    <div className="all" data-aos="zoom-in-up">
      <Container className="containersecond">
        <Card className="cart">
          <Link to={`/category/${categorie._id}`}>
            <Card.Img variant="top" src={categorie.image} />
          </Link>

          <Card.Body
            style={{ backgroundColor: color  }}
            className="colorcategory"
          >
            {/* <Card.Title style={{ width: "80px", margin: "10px 100px 5px" }}>
            </Card.Title> */}
            <Link className="catego" to={`/category/${categorie._id}`}>
              <h4 className="categoname">{categorie.name}</h4>
            </Link>
            {/* <Card.Text>
              <br />
            </Card.Text> */}
          </Card.Body>
        </Card>
      </Container>
      {/* <div data-aos="fade-right">hello</div> */}
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
