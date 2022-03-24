import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './pages/login';

const RootApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
ReactDOM.render(RootApp(),
  document.getElementById('root')
);
