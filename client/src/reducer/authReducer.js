import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
} from "../actions/types";
import { GET_MY_POSTS_SUCCESS } from "../constants/productConstants";

let initState = {
  token: localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  error: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        error: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        isAuth: false,
        error: null,
        user: null,
      };
    case GET_MY_POSTS_SUCCESS:
      return {
        ...state,
        user: { ...state.user, posts: action.payload },
      };
    default:
      return state;
  }
};
export default AuthReducer;
