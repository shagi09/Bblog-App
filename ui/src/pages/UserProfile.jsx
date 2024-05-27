import React, { useState } from 'react'
import { MdMovieEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import avatar from '../images/avatar10.jpg';



const UserProfile = () => {
  const [image,setImage]=useState('')

  function HandleChange(e){
    setImage(e.target.files[0])
  
  }
  return (
    <div className='user-profile-container'>
      <div className='user-profile'>
        <div className='user-profile-image'>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="Selected" />
        ) : (
          <img src={avatar} alt="Placeholder" />
        )}
          

        </div>
        <div className='user-profile-btn'>
          <input type="file"  accept='png,jpg,jpeg' name='file' id='file' onChange={HandleChange} style={{ display: 'none' }}/>
          <label htmlFor="file">
          {image ? (
            <FaCheck/> 
          ) : (
            <MdMovieEdit/>
          )}
          </label>

        </div>


      </div>

      
    </div>
  )
}

export default UserProfile
