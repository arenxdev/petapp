import React from 'react'
import { Link } from 'react-router-dom'
import useGetPets from '../hooks/useGetPets'
import PetItem from '../components/PetItem'

const API = "https://us-central1-reactpetapp.cloudfunctions.net/api"

const Home = () => {
  const pets = useGetPets(API)
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-items">
          {pets.map((pet, index) => 
            <Link key={`pet-${index}`} to={{
              pathname: `/pets/${index}-${pet.name}`,
              state: {...pet,}
            }}>
              <PetItem pet={pet} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home