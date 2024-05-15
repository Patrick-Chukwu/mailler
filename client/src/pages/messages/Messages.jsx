import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './messages.css'
function Messages() {
  const { id } = useParams();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchMessage(id);
  }, [id]);

  const fetchMessage = (id) => {
   fetch(`https://mailler-backend.vercel.app/messages/${id}`)
    .then(response => response.json())
    .then(data => setMessage(data))
    .catch(error => console.error('Error fetching message:', error));

  };

  return (
    <div className="messages">
      {message ? (
        <div className='message_body'>
          <h2 className='read_subject'>{message.subject}</h2>
          <p>{message.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Messages;
