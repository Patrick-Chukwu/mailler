import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import './home.css'

const Home = () => {
  const [messages, setMessages ] = useState([])
  const [unreadMessages, setUnreadMessages ] = useState(0)
    const user = "Pat";

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('https://mailler-backend.vercel.app/messages');
      const data = await response.json();
      setMessages(data.messages);

      // unread
  const totalUnread = data.messages.filter(message => !message.isRead);
  setUnreadMessages(totalUnread.length)
    } catch (error) {
      console.log("Error fetching number of unread messages", error)
    }
  }  
  return (
    <div className='column home'>
        <h2>Hello {user}</h2>
        <p>You have <span className="unique">{unreadMessages}</span> unread mails out of <span className="unique">{messages.length}</span> total mails. </p>
        <Link className='button' to="/inbox">View messages</Link>
    </div>
  )
}

export default Home