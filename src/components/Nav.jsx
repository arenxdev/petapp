import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className="Nav">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/panel">Give for adoption</Link></li>
    </ul>
  </div>
)

export default Nav