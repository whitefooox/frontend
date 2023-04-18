import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './view/page/Auth';
import Main from './view/page/Main';
import { Provider } from 'react-redux';
import store from './view/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = (
  <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/"element={<Auth/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
    </BrowserRouter>
  </Provider>
)

root.render(router);
