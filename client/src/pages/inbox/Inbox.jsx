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
      <h2>Messages</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>
            <strong className='subject'>{message.subject}</strong>
            <p className='content'>{message.content}</p>
            {message.isRead ? <span>I've Read</span> : <span>Unread</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inbox;
