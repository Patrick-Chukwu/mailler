import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    <div className="message">
      {message ? (
        <div>
          <h2 className='read_subject'>{message.subject}</h2>
          <p>{message.content}</p>
          {message.isRead ? <p>Message read</p> : <p>Unread</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Messages;
