import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Modal, Button } from "react-bootstrap";
import "./CategoryPets.css";
import CategoryPetsComponent from "./CategoryPetsComponent";

const CategoryPets = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [show, setShow] = useState(false);
  const auth = useSelector(state => state.auth)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProducts(params.id));
  }, [params.id]);

  return (
    <div>
      {products && products.map((el) => <CategoryPetsComponent el={el} />)}
    </div>
  );
};

export default CategoryPets;
