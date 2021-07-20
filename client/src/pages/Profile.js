import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getmypost } from '../actions/productActions'
import EditPost from '../components/EditPost'
import EditProfile from '../components/EditProfile'
import Alert from '../components/Alert'
import '../css/Profile.css'
import { Carousel } from 'react-bootstrap'

const Profile = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const user = useSelector((state) => state.auth.user)
  const history = useHistory()
  useEffect(() => {
    if (auth.isAuth === false) history.push('/')
  }, [auth.isAuth])
  useEffect(() => {
    setTimeout(() => {
      dispatch(getmypost())
    }, 1000)
  }, [])
  const myPosts = useSelector((state) => state.auth.user.posts)
  return (
    <div>
      <div className="flexproduct">
        <div className="Card0">
          <div className="upper-container">
            <div className="image-container">
              <img
                className="imgprofile"
                src="./images/avatar7.png"
                alt=""
                height="100px"
                width="100px"
              />
            </div>
          </div>
          <div className="lower-container">
            <h3>
              <span>Prénom: </span>
              {user.firstname}
            </h3>
            <h3>
              <span>Nom: </span>
              {user.lastname}
            </h3>

            <h3>
              <span>Téléphone: </span>
              {user.phone}
            </h3>

            <h3>
              <span>Email: </span>
              {user.email}
            </h3>
            <EditProfile user={auth.user} />
          </div>
        </div>
        {/* <h4>{user.password}</h4> */}

        {myPosts &&
          myPosts.reverse().map((elm) => (
            <div className="flexproduct1">
              <div className="Card1">
                <div className="upper-container1">
                  <div>
                    <Carousel className="ca">
                      {elm &&
                        elm.image.map((img) => (
                          <Carousel.Item className="upper-container1">
                            <img className="upper-container1" src={img}></img>
                          </Carousel.Item>
                        ))}
                    </Carousel>
                  </div>
                  <div className="lower-container1">
                    <p>{elm.title}</p>
                    <p>{elm.gender}</p>
                    <p>{elm.city}</p>
                    <p>{elm.price}</p>
                    {/* <p>{elm.description}</p> */}
                    <p>{elm.phone}</p>
                    <EditPost el={elm} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        {/* <Alert /> */}
      </div>
    </div>
  )
}

export default Profile
