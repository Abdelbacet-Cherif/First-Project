import React from 'react'

const UserCard = ({user}) => {
    return (
        <div>
            <h1>{user.firstname}</h1>
            <h1>{user.lastname}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default UserCard
