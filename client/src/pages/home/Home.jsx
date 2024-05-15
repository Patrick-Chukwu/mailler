import React from 'react'
import { Link } from 'react-router-dom';

import './home.css'
const Home = () => {
    const user = "Pat";
    const unreadMessage = 5;
    const totalMessages = 20;
  return (
    <div className='column home'>
        <h2>Hello {user}</h2>
        <p>You have {unreadMessage} unread messages out of {totalMessages} messages </p>
        <Link className='button' to="/inbox">View messages</Link>
    </div>
  )
}

export default Home