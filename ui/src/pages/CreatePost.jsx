import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


  const formats = [
    'font','size',
    'bold','italic','underline','strike',
    'color','background',
    'script',
    'header','blockquote','code-block',
    'indent','list',
    'direction','align',
    'link','image','video','formula',
  ]
  const Post_Categories=[
    'Business','Education','Entertainment','Art','Investment','Uncategorised','Weather'
  ]



const CreatePost = () => {
  const [title,setTitle]=useState('')
  const [thumbnail,setThumbnail]=useState('')
  const [description,setDescription]=useState('')
  const [category,setCategory]=useState('')
  return (
    <div className='createPost-container'>
        <div className='createPost'>
          <h1>Create Post</h1>
          <div className='error-message'>
            this is error message
          </div>
          <div className='title'>
            <input type="text" placeholder='title' value={title} onChange={e=>setTitle(e.target.value)}/>
          </div>
          <div className='post-content'>
            <input type="text" placeholder='Uncategorized' value={category} onChange={e=>setCategory(e.target.value)}/>
            <select name="" id=""></select>
            <ReactQuill  formats={formats} value={description} onChange={e=>setDescription(value)}/>
            <input type="file" onChange={e=>setThumbnail(e.target.files[0])}  />


          </div>
        </div>
      
    </div>
  )
}

export default CreatePost
