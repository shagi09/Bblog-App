import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

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
        <input type="email" name='email' placeholder='Email'value={user.email} onChange={HandleChange} />
        <input type="password" name='password' placeholder='Password'value={user.password} onChange={HandleChange} />
        <input type="password" name='confirmPassword' placeholder='Confirm Password'value={user.confirmPassword} onChange={HandleChange} />



      </div><br />
      <button className='edit-btn'>Register</button>
      <p>Already have an account?<Link to='/login'>login</Link></p>

      
    </div>
  )
}

export default Register