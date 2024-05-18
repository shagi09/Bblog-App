import React from 'react'
import { Link } from 'react-router-dom'


const PostItem = ({postID,desc,title,thumbnail}) => {
  return (
    <article className='post'>
      <div className='post_thumbnail'>
        <img src={thumbnail} alt={title} />

      </div>
      <div className='post_content'>
        <Link to={`/posts/${postID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>

      </div>


    </article>

  )
}

export default PostItem
