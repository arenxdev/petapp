import React from 'react'
import { connect } from 'react-redux'
import { auth } from '../utils/firebase'
import { setUser, setLogin } from '../actions/action'
import Form from '../components/Form'

const Dashboard = props => {

  const logOutFacebook = () => {
    auth().signOut()
    .then(() => {
      props.setUser(null)
      props.setLogin(false)
      props.history.push('/')
    })
  }

  return  (
    <div className="Dashboard">
      <div className="Dashboard-container">
        <div className="Dashboard-content">
          <div className="Dashboard-form">
            <Form />
          </div>
          {props.user &&
            <div className="Dashboard-profile">
              <h2>Profile</h2>
              <div className="Dashboard-profile-info">
                <div>
                  <img src={props.user.photoURL} alt={props.user.displayName} />
                  <span>Name:</span>
                  <h4>{props.user.displayName}</h4>
                  <span>Mail:</span>
                  <h4>{props.user.email}</h4>
                  <button onClick={logOutFacebook}>
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = { setUser, setLogin }
const mapStateToProps = state => ({ user: state.user, login: state.login })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)