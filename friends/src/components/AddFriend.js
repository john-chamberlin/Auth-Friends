import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialState = {
    name: '',
    age: '',
    email: ''
}

const AddFriend = () => {
    const [friendData, setFriendData] = useState(initialState)

    const handleChanges = e => {
        setFriendData({
            ...friendData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        const newFriend = {
            id: Date.now(),
            name: friendData.name,
            age: friendData.age,
            email: friendData.email
        }
        axiosWithAuth().post('/friends', newFriend)
            .then(res=> {
                console.log(res)
                setFriendData(initialState)
                window.location.href= './friends'
            })
            .catch(err=> {
                console.log(err)
            })
    }

    return(
        <div className='friend-form'>
            <h1>Add a friend!</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={handleChanges}
                    value={friendData.name}
                />
                <input 
                    type='text'
                    name='age'
                    placeholder='Age'
                    onChange={handleChanges}
                    value={friendData.age}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={handleChanges}
                    value={friendData.email}
                />
                <button>Add Friend</button>

            </form>
        </div>
    )
}

export default AddFriend