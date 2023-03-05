import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './view/page/Auth';
import Main from './view/page/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = (
  <BrowserRouter>
      <Routes>
        <Route path="/"element={<Auth/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/main" element={<Main/>}/>
      </Routes>
  </BrowserRouter>
)

root.render(router);
