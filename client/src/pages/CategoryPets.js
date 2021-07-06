import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsByPage } from "../actions/productActions";
import { Modal, Button, Pagination } from "react-bootstrap";
import "./CategoryPets.css";
import CategoryPetsComponent from "./CategoryPetsComponent";
import ProductComponents from "../components/ProductComponents";
import Search from "../components/Search";
import CategorySideBar from "../components/CategorySideBar";
import { getAllCategorie } from "../actions/categorieActions";
import axios from "axios";
// import { PaginationItem } from "@material-ui/lab";
// import Pagination from "@material-ui/lab/Pagination";

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
  const [pages, setPages] = useState(0);
  const [active, setActive] = useState(1);
  useEffect(() => {
    //dispatch(getProducts(params.id));
    dispatch(getAllCategorie());
  }, [params.id]);

  useEffect(() => {
    axios
      .get(`/product/number/${params.id}`)
      .then((res) => setPages(+res.data / 3));
    dispatch(getProductsByPage(params.id, 0));
  }, []);
  useEffect(() => {
    dispatch(getProductsByPage(params.id, (active - 1) * 3));
  }, [active]);

  const PagesToDisplay = () => {
    let tab = [];
    for (let i = 1; i <= pages; i++) {
      tab.push(
        // <Pagination count={10} color="secondary"   key={i}
        // onClick={() => dispatch(getProductsByPage(params.id, (i - 1) * 3))} />
        // <Pagination
        //   count={i}
        //   variant="outlined"
        //   shape="rounded"
        //   key={i}
        //   onClick={() => dispatch(getProductsByPage(params.id, (i - 1) * 3))}
        // />

        <Pagination.Item key={i} onClick={() => setActive(i)}>
          {i}
        </Pagination.Item>
      );
    }
    return tab.map((el) => el);
  };

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
                {/* {console.log("dsddssd", categories)} */}
                <CategoryPetsComponent key={i} catId={params.id} el={el} />
                {/* <ProductComponents key={i + "2"} post={el}></ProductComponents> */}
              </>
            ))}
      </div>
      {/* <Pagination count={10} variant="outlined" shape="rounded">
        {PagesToDisplay()}
      </Pagination> */}

      <Pagination size="sm">
        <Pagination.First onClick={() => setActive(1)} />
        <Pagination.Prev
          onClick={() => setActive(active == 1 ? active : active - 1)}
        />
        {PagesToDisplay()}
        <Pagination.Next
          onClick={() => setActive(active === pages ? active : active + 1)}
        />
        <Pagination.Last onClick={() => setActive(pages)} />
      </Pagination>
    </div>
  );
};

export default CategoryPets;
