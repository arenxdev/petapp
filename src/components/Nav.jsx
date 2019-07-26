import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = props => (
  <div className="Nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      {props.login && <li><Link to="/panel">Account</Link></li>}
      {!props.login && <li><Link to="/login">Login</Link></li>}
      <li><a onClick={props.showModal}>Give in adopton</a></li>
    </ul>
  </div>
)

const mapStateToProps = state => ({login: state.login})
export default connect(mapStateToProps)(Nav)