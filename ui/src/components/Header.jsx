import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
          <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
          <img src="/mern-blog-assets-main/blog15.jpg" alt="logo image" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to='/profile'>shalom wubu</Link></li>
          <li><Link to='/create'>create post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>logout</Link></li>
        </ul>

      </div>

    </nav> 
    </div>
    


  )
}

export default Header
