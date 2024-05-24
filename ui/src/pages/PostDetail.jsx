import React from 'react'
import avatar from '../images/avatar1.jpg'

const PostDetail = () => {
  return (
    <div>

      <div className='post_details'>
          <div className='post-details-header'>
            <img src={avatar} alt="" />
            <div className='post-details-author'>
              <h5>By shalom wubu</h5>
              <small>just now</small>


            </div>

            <div className='post-detail-btn'>
              <button>edit</button>
              <button>delete</button>
            </div>

          </div>
          <div className='post-details-content'>

          </div>



      </div>

      
    </div>
  )
}

export default PostDetail
