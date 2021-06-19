import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Profile = () => {
    const auth = useSelector(state => state.auth)
    const history = useHistory()
    useEffect(() => {
        if (auth.isAuth === false) history.push("/");
      }, [auth.isAuth]);
    return (
        <div>
            <div>
               <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Profile
