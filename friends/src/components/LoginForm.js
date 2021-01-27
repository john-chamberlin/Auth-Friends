import React from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'

class LoginForm extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
        },
        isLoading: false
    }

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault()
        this.setState({
            isLoading: true
        })
        axios.post('http://localhost:5000/api/login', this.state.credentials)
            .then(res=> {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                this.setState({
                    isLoading: false,
                })
                this.props.history.push('./friends')
            })
            .catch(err=> {
                this.setState({
                    isLoading: false
                })
                console.log(err)
            })
    }

    render() {
        if(this.state.isLoading) {
            return (
                <div className='spinner'>
                    <Spinner animation="border" role='status'/>
                </div>
            )
        } else {
            return (
                <div className='loginForm'>
                    <form onSubmit={this.login}>
                        <input
                            type='text'
                            name='username'
                            onChange={this.handleChanges}
                            value={this.state.credentials.username}
                            placeholder='Username'
                        />
                        <input 
                            type='password'
                            name='password'
                            onChange={this.handleChanges}
                            value={this.state.credentials.password}
                            placeholder='Password'
                        />
                        <button>Log in</button>
                    </form>
                </div>
            )
        }
    }
}



export default LoginForm