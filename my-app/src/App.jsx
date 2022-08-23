import React, { useState, useEffect } from 'react';
import './assets/App.css';

function App() {
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('formData')) || {
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData])

  function handleChange(e) {
    const {name, value, type, checked} = e.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    if (formData.password === formData.confirmPassword) {
      console.log("Successfully signed up");
    } else {
      console.log("Passwords does not match");
      return
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <h1 className='title'>Registration</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className='form-control'>
        <label>
          Full Name
          <input
            required 
            type='text' 
            placeholder='Enter your name'
            onChange={handleChange}
            value={formData.fullName}
            name='fullName'
          />
        </label>
        </div>
        <div className='form-control'>
        <label>
          Username
          <input
            required 
            type='text' 
            placeholder='Enter your username'
            onChange={handleChange}
            value={formData.userName}
            name='userName'
          />
        </label>
        </div>
        <div className='form-control'>
        <label>
          Email
          <input 
            required
            type='email' 
            placeholder='Enter your email'
            onChange={handleChange}
            value={formData.email}
            name='email'
          />
        </label>
        </div>
        <div className='form-control'>
        <label>
          Phone Number
          <input
            required 
            type='tel' 
            placeholder='Enter your number'
            onChange={handleChange}
            value={formData.phoneNumber}
            name='phoneNumber'
          />
        </label>
        </div>
        <div className='form-control'>
        <label>
          Password
          <input
            required 
            type='password' 
            placeholder='Enter your password'
            onChange={handleChange}
            value={formData.password}
            name='password'
          />
        </label>
        </div>
        <div className='form-control'>
        <label>
          Confirm Password
          <input
            required 
            type='password' 
            placeholder='Confirm your password'
            onChange={handleChange}
            value={formData.confirmPassword}
            name='confirmPassword'
          />
        </label>
        </div>
        <h3 className='category-title'>Gender</h3>
        <div className='category'>         
          <label>
            <input
              required 
              type="radio" 
              onChange={handleChange}
              value='Male'
              checked={formData.gender === "Male"}
              name='gender'
            />
            <span>   </span>
            Male
          </label>
          <label>
            <input
              required 
              type="radio"
              onChange={handleChange} 
              value='Female'
              checked={formData.gender === "Female"}
              name='gender'
            />
            <span>   </span>
            Female
          </label>
          <label>
            <input
              required 
              type="radio"
              onChange={handleChange} 
              value="Prefer not to say"
              checked={formData.gender === "Prefer not to say"}
              name='gender'
            />
            <span>   </span>
            Prefer not to say
          </label>
        </div>
      <button className='form-submit'>
        Register
      </button>     
    </form>
    </div>
    
  );
}

export default App;
