import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './view/page/auth/Auth';
import Main from './view/page/main/Main';
import { buildProvider } from './state/redux/api/apiRoot';
import App from './App';
import Login from './view/component/login/Login';
import SearchBar from './view/component/searchBar/SearchBar';
import Chat from './view/component/chat/Chat';

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
            <Route path='/test' element={<Chat/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </App>
)

root.render(router);
