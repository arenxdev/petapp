import React from 'react'
import { auth, provider } from '../utils/firebase'

const Login = props => {

  const loginFacebook = () => {
    auth().signInWithPopup(provider)
    .then(({ user }) => {
      console.log(user)
      props.history.push('/panel')
    })
  } 
  
  const logOutFacebook = () => {
    auth().signOut()
    .then(() => props.history.push('/'))
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <h2>Create account or login</h2>
          <button onClick={loginFacebook} >
            <i className="fab fa-facebook-square" />
            <span>Login with Facebook</span>
          </button>
          <button onClick={logOutFacebook} >
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login