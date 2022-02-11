import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Aaa from './components/Aaaa';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aaa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
