import axios from "axios";
import * as actionTypes from "../constants/productConstants";

//get
export const getProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
    const { data } = await axios.get("/product/" + id);

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//create
export const createProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.POST_PRODUCTS_REQUEST });
    const response = await axios.post("/product", data);

    dispatch({
      type: actionTypes.POST_PRODUCTS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.POST_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//update
export const update = (id, updateData, catId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/product/${id}`, updateData);
    /*  dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    }); */
    dispatch(getProducts(catId));
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

//delete
export const deletes = (id, catId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/product/delete/${id}`);
    dispatch(getProducts(catId));
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
