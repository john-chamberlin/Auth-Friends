import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import Spinner from 'react-bootstrap/Spinner'

import Friend from './Friend'

const FriendsList = (props) => {
    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
        axiosWithAuth().get('/friends')
            .then(res=> {
                console.log(res.data)
                setFriends(res.data)
                setIsLoading(false)
            })
            .catch(err=> {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    const routeToAddFriend = () => {
        return (
            props.history.push('/addFriend')
        )
    }
    
    if(isLoading) {
        return(
            <div className = 'spinner'>
                <Spinner animation="border" role='status'/>
            </div>
        )
    } else {
        return(
            <div className='friends-container'>
                <h2>Friends List</h2>
                {friends.map(friend=> {
                    return <Friend friend={friend} key={friend.id}/>
                })}
                <button onClick={routeToAddFriend}>Add Friend</button>
            </div>
        )
    }
}

export default FriendsList