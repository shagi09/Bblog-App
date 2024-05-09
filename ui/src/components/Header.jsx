import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className='container nav_container'>
        <Link to='/' className='nav_logo'>
          <img src="" alt="" />
        </Link>
        <ul className='nav_menu'>
          <li><Link to='/profile'>shalom wubu</Link></li>
          <li><Link to='/create'>create post</Link></li>
          <li><Link to='/authors'>Authors</Link></li>
          <li><Link to='/logout'>logout</Link></li>
        </ul>

      </div>

    </nav>

  )
}

export default Header
