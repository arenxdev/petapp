import React from 'react'

const PetInfo = ({ pet }) => {
  return (
    <div className="PetInfo">
      <div className="PetInfo-container">
        <div className="PetInfo-content">
          <div className="PetInfo-avatar">
            <img src={pet.photo} alt="Pet photo"/>
          </div>
          <div className="PetInfo-profile">
            <h2>{pet.name}</h2>
            <span>
              {pet.type === 'dog' && '🐶'}
              {pet.type === 'cat' && '😸'}
            </span>
            <p>
              {pet.description}
              <i>
                {pet.type === 'male' && '♂'}
                {pet.type === 'female' && '♀'}
              </i>
            </p>
            <div className="PetInfo-type">
              <button>
                Adopt
              </button>
            </div>
            <div className="PetInfo-profile-adopt">
              <div className="PetInfo-item">
                <h3>Contact data</h3>
                <span>Owner:</span>
                <h4>Aaron Isaacs</h4>
                <h4>aaron.isaacs.ing@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetInfo