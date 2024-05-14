import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './inbox.css'

function Inbox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('https://mailler-backend.vercel.app/api');
      const data = await response.json();
      setMessages(data.messages);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  return (
    <div className='column inbox'>
      <h2>Your Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <p key={index}>
            
            
            {(message.isRead )? (
              <div className="column read">
       <Link to="/messages/1" className='subject'>{message.subject}</Link>
            <p className='content'>{message.content}</p>
              </div>
   
            ) : (
              <div className="column unread">
              <Link to="/messages/:id" className='subject'>{message.subject}</Link>
                 <p className='content'>{message.content}</p>
                   </div>
            )}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
