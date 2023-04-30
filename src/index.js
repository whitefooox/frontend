import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './view/page/auth/Auth';
import Main from './view/page/Main';
import { buildProvider } from './state/redux/api';
import App from './App';
import Login from './view/component/login/Login';

const Provider = buildProvider();

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = (
  <App>
    <Provider>
      <BrowserRouter>
          <Routes>
            <Route path="/"element={<Auth/>}/>
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path='/test' element={<Login/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </App>
)

root.render(router);
