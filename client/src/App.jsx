import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css'
import Home from './pages/home/Home';
import Inbox from './pages/inbox/Inbox';
import Message from './pages/messages/Messages';
import Header from './components/header/Header';

function App() {
  return (
<>
<Header/>

<Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/inbox"  element={<Inbox/>} />
      <Route path="/messages/:id"  element={<Message/>} />
</Routes>
</>
  );
}

export default App;
