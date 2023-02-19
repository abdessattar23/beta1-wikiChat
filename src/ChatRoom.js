import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function Chatroom({ match }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const db = firebase.database().ref(match.params.id);

    db.on('value', (snapshot) => {
      if (snapshot.exists()) {
        setMessages(snapshot.val());
      } else {
        setMessages([]);
      }
    });

    return () => db.off();
  }, [match.params.id]);

  function handleSubmit(event) {
    event.preventDefault();
    const db = firebase.database().ref(match.params.id);
    db.push({
      text: message,
      timestamp: Date.now()
    });
    setMessage('');
  }

  return (
    <div>
      <h1>Chatroom {match.params.id}</h1>
      <ul>
        {messages.map((msg) => (
          <li key={msg.timestamp}>{msg.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chatroom;
