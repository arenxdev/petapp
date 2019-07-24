import React from 'react'

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Give uo for adoption</h2>
    </div>
    <div className="Form-item">
      <form>
        <input name="name" type="text" placeholder="Name of your pet" />
        <input name="description" type="text" placeholder="Describe your pet" />
        <select name="type">
          <option disabled selected>Select</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
        </select>
        <select name="gender">
          <option disabled selected>Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="adopt">
          <option disabled selected>Select</option>
          <option value="true">Five for adoption</option>
          <option value="false">Take care</option>
        </select>
        <input type="file" name="photo" />
        <button>Send</button>
      </form>
    </div>
  </div>
)

export default Form