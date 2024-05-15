import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <div className='row navbar'>
            <Link to='/' className="logo nav_links" >Mailler</Link>
            <Link to='/inbox' className="nav_links" >Inbox</Link>

    </div>
  )
}

export default Header