import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  UPDATE_PROFILE_SUCCESS,
} from "./types";
import axios from "axios";
import setToken from "../setToken";
import { getmypost } from "./productActions";

export const registerUser = (info) => (dispatch) => {
  axios
    .post("/register", info)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("isAuth", true);
    })
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const loadUser = () => (dispatch) => {
  setToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.msg,
      })
    );
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      localStorage.setItem("isAuth", true);
    })
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

//update profile
export const updateProfile = (profile) => async (dispatch) => {
  try {
    const { data } = axios.put("/profile/editprofile", profile);
    dispatch(loadUser());
    dispatch(getmypost());
  } catch (err) {}
};
