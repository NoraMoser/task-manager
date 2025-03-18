import React, {useEffect, useState} from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    termsAccepted: false
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    role: '',
    termsAccepted: ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }))
  }

  const handleValidation = () => {
    const errors = {}

      errors.name= formData.name ? '' : 'Name cannot be blank'
      errors.email= formData.email ? '' : 'Email cannot be blank'
      errors.termsAccepted= (formData.name && formData.email) ?? true
    
      setErrors(errors)
      return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validation = handleValidation()
    console.log(validation)
    if ((validation.name || validation.email) !== '') {
      console.log('I cannot submit with errors')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          ></input>
      </div>
<p>{errors.name ? `The form has errors. Fix ${errors.name}.` : null}</p>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        ></input>
      </div>
      <p>{errors.email ? `The form has errors. Fix ${errors.email}.` : null}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default UserForm;