import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Modal, Button } from "react-bootstrap";
import "./CategoryPets.css";
import CategoryPetsComponent from "./CategoryPetsComponent";
import ProductComponents from "../components/ProductComponents";

const CategoryPets = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [show, setShow] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProducts(params.id));
  }, [params.id]);

  useEffect(() => {
    if (auth.isAuth === false) history.push("/");
  }, [auth.isAuth]);

  return (
    <div>
      {products &&
        products.map((el) => (
          <>
            <CategoryPetsComponent catId={params.id} el={el} />
            <ProductComponents post={el}></ProductComponents>
          </>
        ))}
    </div>
  );
};

export default CategoryPets;
