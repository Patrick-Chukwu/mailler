import React, { useState, useEffect } from 'react';
import './inbox.css'

function Inbox() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/api');
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
         <strong className='subject'>{message.subject}</strong>
            <p className='content'>{message.content}</p>
              </div>
   
            ) : (
            <span className='unread'>Message unread</span>
            )}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
