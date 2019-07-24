import React from 'react'
import Form from '../components/Form'

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashboard-container">
      <div className="Dashboard-content">
        <div className="Dashboard-form">
          <Form />
        </div>
        <div className="Dashboard-profile">
          <h2>Profile</h2>
          <div className="Dashboard-profile-info">
            <img src="/" alt="Name user"/>
            <span>Name:</span>
            <h4>Aaron Isaacs</h4>
            <span>Mail:</span>
            <h4>aaron.isaacs.ing@gmail.com</h4>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard