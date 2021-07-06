import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { getProducts } from "../actions/productActions";
import { Button, Carousel, Row, Col } from "react-bootstrap";
import { getAllCategorie } from "../actions/categorieActions";

import "./Home.css";
import HomeCard from "./HomeCard";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const Products = useSelector((state) => state.productReducer);
  const { products, loading, error } = Products;

  useEffect(() => {
    // dispatch(getProducts());
    dispatch(getAllCategorie());
  }, [dispatch]);
  useEffect(() => {
    if (auth.isAuth === false) history.push("/");
  }, [auth.isAuth]);
  const randomColor = ["#17A5F4", "#A8C80D", "#F7470C"];
  return (
    <div>
      {/* <video scr="./videos/video.mp4"  /> */}
      {/* https://www.ingridkuhn.com/themes/petz/videos/video.webm */}
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption className="absolute">
            <h1 className="hello">Bienvenue</h1>
            <h1 className="titre1">ENVIE D'ADOPTER UN CHIEN ?</h1>
            {/* <video scr="./videos/video.mp4"  /> */}

            <img
              className="logo-header"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Carousel.Caption>
          <video width="100%" height="100%"   playsinline="" autoplay="" muted="" loop >
  <source src="./videos/video.mp4" type="video/mp4"/>
  </video>
          {/* <img
            className="carousel relative"
            src="./images/dog.home.jpg"
            alt="First slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="absolute">
            <img
              className="logo-header"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Carousel.Caption>
          <img
            className="carousel "
            src="./images/cat.home.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="carousel "
            src="./images/dog1.home.jpg"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
      <h1 className="line1">Nos Annonces</h1>
      <Row className="row1">
        {categories.categories ? (
          <div className="grid1">
            {categories.categories.map((el, i) => (
              <Col className="coll2">
                <HomeCard color={randomColor[i % 3]} categorie={el} />
              </Col>
            ))}
          </div>
        ) : null}
      </Row>
      {/* {products &&
        products.map(
          (el) =>
            el.image && (
              <div>
                <img
                  src={process.env.REACT_APP_STORAGE_URL + el.image}
                  width="150"
                />
                <p>{el.title}</p>
              </div>
            )
        )} */}
    </div>
  );
};

export default Home;
