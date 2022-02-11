import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Aaa from './components/Aaaa';
import ChatRoom from './pages/chatroom/ChatRoom';
import Login from './pages/login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aaa />} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/chatroom" element={<ChatRoom />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
