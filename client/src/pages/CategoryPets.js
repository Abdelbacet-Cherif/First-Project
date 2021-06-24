import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { Modal, Button } from "react-bootstrap";
import "./CategoryPets.css";
import CategoryPetsComponent from "./CategoryPetsComponent";
import ProductComponents from "../components/ProductComponents";
import Search from "../components/Search";
import CategorySideBar from "../components/CategorySideBar";
import { getAllCategorie } from "../actions/categorieActions";

const CategoryPets = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const [show, setShow] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [villeSearch, setVilleSearch] = useState("");
  const categories = useSelector((state) => state.categories);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getProducts(params.id));
    dispatch(getAllCategorie());
  }, [params.id]);

  const handleSearchChange = (value) => {
    setSearch(value);
  };
  const handleVilleSearch = (value) => {
    setVilleSearch(value);
  };

  // useEffect(() => {
  //   if (auth.isAuth === false) history.push("/");
  // }, [auth.isAuth]);

  return (
    <div>
      <div>
        <Search
          handleSearchChange={handleSearchChange}
          handleVilleSearch={handleVilleSearch}
        />
      </div>

      <div className="car1">
        <CategorySideBar categories={categories.categories}></CategorySideBar>
        {products &&
          products
            .reverse()
            .filter(
              (el) =>
                (el.title
                  .toUpperCase()
                  .trim()
                  .includes(search.toUpperCase().trim()) ||
                  el.description
                    .toUpperCase()
                    .trim()
                    .includes(search.toUpperCase().trim())) &&
                el.city
                  .toUpperCase()
                  .trim()
                  .includes(villeSearch.toUpperCase().trim())
            )
            .map((el, i) => (
              <>
                {console.log("dsddssd", categories)}
                <CategoryPetsComponent key={i} catId={params.id} el={el} />
                {/* <ProductComponents key={i + "2"} post={el}></ProductComponents> */}
              </>
            ))}
      </div>
    </div>
  );
};

export default CategoryPets;
