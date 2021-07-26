import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { getProducts } from "../actions/productActions";
import { Carousel, Row, Col, Button } from 'react-bootstrap'
import { getAllCategorie } from '../actions/categorieActions'
import './Home.css'
import HomeCard from './HomeCard'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {
  const history = useHistory()
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  const Products = useSelector((state) => state.productReducer)
  const { products, loading, error } = Products

  useEffect(() => {
    // dispatch(getProducts());
    dispatch(getAllCategorie())
  }, [dispatch])
  useEffect(() => {
    if (auth.isAuth === false) history.push('/')
  }, [auth.isAuth]) //[auth.isAuth]
  const randomColor = ['#17A5F4', '#A8C80D', '#F7470C']
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <Carousel.Caption className="absolute">
            <h1 className="hello">Bienvenue sur</h1>

            <span className="titre1">Envie d'adopter </span>
            <br />
            <span className="titre11">un chat ?</span>
            <Link to={`/category/60d88ae1a015722b0c3a93fc`}>
              <h1 className="titre1111">Voir nos annonces chats</h1>
            </Link>
            <p className="titre11001">ou</p>
            <Link to="/register">
              <Button
                className="btn btnfont1 titre1120"
                buttonStyle="btn--outline"
              >
                Déposer une annonce
              </Button>
            </Link>
            <img
              className="logo-header"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Carousel.Caption>
          <video
            muted=""
            loop
            width="100%"
            height="100%"
            playsinline=""
            autoplay=""
          >
            <source src="./videos/video.mp4" type="video/mp4" />
          </video>
          {/* <img
            className="carousel relative"
            src="./images/dog.home.jpg"
            alt="First slide"
          /> */}
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption className="absolute">
            <span className="titre1">Envie d'adopter</span>
            <br />
            <span className="titre110">un chien ?</span>
            <Link to={`/category/60d88ae1a015722b0c3a93fb`}>
              <h1 className="titre111">Voir nos annonces chiens</h1>
            </Link>
            <p className="titre1100">ou</p>
            <Link to="/register">
              <Button
                className="btn btnfont1 titre112 "
                buttonStyle="btn--outline"
              >
                Déposer une annonce
              </Button>
            </Link>
            <img
              className="logo-header"
              src="https://demo.qodeinteractive.com/bridge67/wp-content/uploads/2015/03/slider-graphic.png"
              alt="Third slide"
            />
          </Carousel.Caption>
          <img
            className="carousel "
            src="./images/slide0.jpg"
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

      {/* <span className="titre1">Envie d'adopter</span> */}

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

      <div className="nous0 ">
        <h1 className="nous">Nous vous accompagnons</h1>
        <p className="nous1">
          Ça y est, vous avez bien réfléchi et vous voulez acquérir un animal de
          compagnie. Alors bienvenu sur PetStore, le spécialiste des petites
          annonces gratuites d’animaux. Que ce soit par le biais des annonces ou
          des annuaires, ici tout est fait pour vous aider à trouver rapidement
          le compagnon qui vous correspond.
        </p>
        <p className="nous1">
          Si vous représentez une association, si vous possédez un élevage
          professionnel ou amateur, ou si vous proposez vos services dans le
          secteur animalier, ce site est aussi fait pour vous aider à
          communiquer gratuitement sur votre activité.
        </p>
        <p className="nous1">
          Nous sommes une équipe de passionnés d’animaux et nous restons à votre
          écoute, alors n’hésitez pas à nous adresser vos remarques ou vos idées
          d’améliorations.
        </p>
      </div>
      <div className="ban">
        <img
          alt="f"
          data-aos="fade-down-right"
          className="ban1"
          src="./images/banner1.jpg"
        />
        <img
          alt="f"
          data-aos="fade-down-left"
          className="ban2"
          src="./images/banner2.jpg"
        />
      </div>
      {/* <img src="./images/pet.png" className="pet"/> */}
      <img alt="f" src="./images/dogf.jpg" className="pe" />
      <img alt="f" src="./images/catf.jpg" className="pe" />
      <img alt="f" src="./images/dogf0.png" className="pe" />
      <img alt="f" src="./images/dogf1.jpg" className="pe" />
      <img alt="f" src="./images/dogf2.jpg" className="pe" />
      <img alt="f" src="./images/birdf.jpg" className="pe" />
    </div>
  )
}

export default Home
