import React from 'react'
import {useHistory} from 'react-router-dom'

const Friend = (props) => {
 const {friend} = props

 let history=useHistory()

 const routeToEditFriend = () => {
   history.push('./editFriend', {friend: friend})
 }
    return(
        <div className='friend'>
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={routeToEditFriend}>Edit Friend</button>
        </div>
    )
}

export default Friend