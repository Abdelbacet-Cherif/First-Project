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
  return (
    <div>
      {/* <video scr="./videos/video.mp4"  /> */}
      {/* https://www.ingridkuhn.com/themes/petz/videos/video.webm */}
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption className="absolute">
            <h1 className="hello">Bienvenue</h1>
            <img
              className="logo-header"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Carousel.Caption>

          <img
            className="carousel relative"
            src="./images/dog.home.jpg"
            alt="First slide"
          />
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

      <Row className="row1">
        {categories.categories
          ? categories.categories.map((el, i) => (
              <Col>
                <HomeCard categorie={el} />
              </Col>
            ))
          : null}
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
