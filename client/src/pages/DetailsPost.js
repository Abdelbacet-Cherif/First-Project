import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DetailsPost = ({ match }) => {
  const [product, setProduct] = useState(null);
  const products = useSelector((state) => state.productReducer.products);
  useEffect(() => {
    setProduct(products.find((el) => (el._id = match.params.id)));
  }, []);
  return (
    <div>
      <h1>hello</h1>
      {/* {console.log(product)}
      {console.log(products)} */}

      {product && <h2>{product.title}</h2>}
    </div>
  );
};

export default DetailsPost;
