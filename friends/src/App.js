import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import LoginForm from './components/LoginForm'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend'
import EditFriend from './components/EditFriend'


import './App.css';


function App() {

  return (
    <Router >
        <div className="App">
          <div className='link-container'>
            <Link to ='/login' className='link'>Login</Link>
            <Link to ='/friends' className='link'>Friends</Link>
            {/* <Link to ='/addFriend' className='link'>Add Friend</Link> */}
          </div>

          <Switch className='switch'>
            <Route path='/login' component={LoginForm}/>
            <PrivateRoute exact path='/addFriend' component={AddFriend} />
            <PrivateRoute exact path='/friends' component={FriendsList} />
            <PrivateRoute exact path='/editFriend' component={EditFriend} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
