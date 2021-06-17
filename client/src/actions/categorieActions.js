import { GET_CATEGORIE_FAIL, GET_CATEGORIE_SUCCESS } from "./types";
import axios from "axios";


export const getAllCategorie=()=>dispatch=>{
  axios.get('/categories')
      .then(res=>dispatch({
          type:GET_CATEGORIE_SUCCESS,
          payload:res.data
      }))
      .catch(err=>dispatch({
          type:GET_CATEGORIE_FAIL,
          payload:err.response.data.errors,
      }))
}
