import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const EditFriend = (props) => {
    const [friend, setFriend] = useState(props.location.state.friend)


    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth().put(`/friends/${friend.id}`, friend)
            .then(res=> {
                console.log(res.data)
                window.location.href='./friends'
            })
            .catch(err=> {
                console.log(err.message)
            })
    }

    const deleteFriend = () => {
        axiosWithAuth().delete(`/friends/${friend.id}`)
            .then(res=> {
                console.log(res)
                window.location.href = '/friends'
            })
            .catch(err=> {
                console.log(err)
            })
    }


    const handleChanges = e => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div>
            <div className='friend-form'>
                <h1>Edit this friend</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={handleChanges}
                        value={friend.name}
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={handleChanges}
                        value={friend.age}
                    />
                    <input 
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={handleChanges}
                        value={friend.email}
                    />
                    <button>Submit Changes</button>
                    <button onClick={deleteFriend}>Delete Friend</button>
                </form>
            </div>
        </div>
    )
}

export default EditFriend