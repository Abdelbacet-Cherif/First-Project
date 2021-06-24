import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getmypost } from "../actions/productActions";
import EditPost from "../components/EditPost";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  useEffect(() => {
    if (auth.isAuth === false) history.push("/");
  }, [auth.isAuth]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(getmypost());
    }, 1000);
  }, []);
  const myPosts = useSelector((state) => state.auth.user.posts);
  return (
    <div>
      <div>
        <h4>{user.firstname}</h4>
        <h4>{user.lastname}</h4>
        <h4>{user.phone}</h4>
        <h4>{user.email}</h4>
        <EditProfile user={auth.user} />
        {/* <h4>{user.password}</h4> */}
        {myPosts &&
          myPosts.reverse().map((elm) => (
            <div>
              <img style={{ width: "150px" }} src={elm.image}></img>
              <p>{elm.title}</p>
              <p>{elm.gender}</p>
              <p>{elm.city}</p>
              <p>{elm.price}</p>
              <p>{elm.description}</p>
              <p>{elm.phone}</p>

              <EditPost el={elm} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
