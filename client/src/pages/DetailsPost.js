import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../css/DetailsPost.css'

const DetailsPost = ({ match, el }) => {
  const [product, setProduct] = useState(null)
  const products = useSelector((state) => state.productReducer.products)
  useEffect(() => {
    setProduct(products.find((el) => el._id == match.params.id))
  }, [])

  return (
    <div>
      <div className="ffle">
        {/* {console.log(match.params.id)} */}
        {/* {console.log(products)} */}
        <div className="column">
          {/* <Carousel>
          {product && (
            <Carousel.Item>
              <img className=" photo" alt="First slide" src={product.image}></img>
            </Carousel.Item>
          )}
        </Carousel> */}
          <Carousel className=" photo">
            {product &&
              product.image.map((img) => (
                <Carousel.Item className=" photo">
                  <img className=" photo" src={img} alt="First slide" />
                </Carousel.Item>
              ))}
          </Carousel>
          {product && <p className="ci0">Publié: {product.created_at}</p>}

          <p className="pro">Déscription :</p>
          {product && <p className="pro1"> {product.description}</p>}
        </div>
        {/* {product && product.map((img) => < img   src={img}  />)} */}
        <div className="column1">
          {product && <span className="pr">{product.price}</span>}
          {product && <h2 className="pr">{product.title}</h2>}
          {product && (
            <h2 className="ci">
              <i class="fas fa-map-marker-alt"></i> {product.city}
            </h2>
          )}
          {product && <h2 className="pro1">{product.gender}</h2>}
          {product && <h2 className="pro1">{product.phone}</h2>}
        </div>
      </div>
    </div>
  )
}

export default DetailsPost
