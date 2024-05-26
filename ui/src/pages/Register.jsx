import React from 'react'
import { useState } from 'react'

const Register = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  function HandleChange(e){
    setUser((previousState)=>(
      {
        ...previousState,[e.target.name]:e.target.value

      }
    ))

  }
  return (
    <div className='register-container'>
      <div className='register'>
        <h1>Sign Up</h1>
        <p>This is an error message</p>
        <input type="text" name='name' placeholder='Full Name'value={user.name} onChange={HandleChange} />
        <input type="text" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="text" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <input type="text" name='confirmPassword' placeholder='Confirm Password'value={user.confirmPassword} onChange={HandleChange} />



      </div><br />
      <button className='edit-btn'>Register</button>
      <p>Already have an account?</p>

      
    </div>
  )
}

export default Register
