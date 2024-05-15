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

  const reduceContent = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };


  const updateReadStatus = async (index) => {
    try {
      const updatedMessages = [...messages];
      updatedMessages[index].isRead = true;
      setMessages(updatedMessages);
      //  update backend with the new isRead status
      await fetch(`https://mailler-backend.vercel.app/messages/mark-as-read/${index}`, { method: 'PUT' });
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  return (

    <div className='inbox'>
    <h2>Your Messages</h2>
    <ul>
      {messages.map((message, index) => (
        <li key={index}>
          <h3 className='subject'>{message.subject}</h3>
          <p>
            <Link className='links' to={`/messages/${index}`}
             onClick={() => updateReadStatus(index)}>
              {reduceContent(message.content, message.content.length / 2)}
            </Link>
          </p>
          {message.isRead ? <span>Read</span> : <span>Unread mail</span>}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Inbox;
