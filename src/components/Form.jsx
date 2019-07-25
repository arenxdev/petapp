import React, { useState } from 'react'
import { storage, database } from '../utils/firebase'

const Form = () => {

  const [petPhoto, setPetPhoto] = useState('')
  const [sendForm, setSendForm] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const form = new FormData(event.target)
    const newDate = new Date().toISOString()

    debugger
    const data = {
      'adopt': form.get('adopt'),
      'date': newDate,
      'description': form.get('description'),
      'gender': form.get('gender'),
      'name': form.get('name'),
      'photo': petPhoto,
      'profilePic': '',
      'type': form.get('type'),
      'userContact': '',
      'userName': ''
    }

    database.ref('pets').push(data)
    .then(() => setSendForm(true))
    .catch(() => setSendForm(false))
  }

  const onChange = event => {
    const file = event.target.files[0]
    const storageRef = storage.ref()
    const name = (+new Date())+'-'+file.name
    const uploadFile = storageRef.child(name).put(file)

    uploadFile
    .then(snapshot => {
      snapshot.ref.getDownloadURL()
      .then(downloadURL => setPetPhoto(downloadURL))
    })
  }

  return (
    <div className="Form">
      <div className="Form-head">
        <h2>Give for adoption</h2>
      </div>
      {sendForm &&
        <div className="Form-send">
          <span>Saved successfully!</span>
        </div>
      }
      {!sendForm &&
        <div className="Form-item">
          <form onSubmit={handleSubmit} >
            <input name="name" type="text" placeholder="Name of your pet" />
            <input name="description" type="text" placeholder="Describe your pet" />
            <select name="type">
              <option disabled defaultValue>Select</option>
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
            </select>
            <select name="gender">
              <option disabled defaultValue>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select name="adopt">
              <option disabled defaultValue>Select</option>
              <option value="true">Give for adoption</option>
              <option value="false">Take care</option>
            </select>
            <input type="file" onChange={onChange} name="photo" />
            <button>Send</button>
          </form>
        </div>
      }
    </div>
  )
}

export default Form