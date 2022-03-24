import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import DangerReport from './pages/dangerReport';
import Login from './pages/login';
import Monitor from './pages/monitor';
import Platfrom from './pages/platfrom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/platform' element={<Platfrom />} />
          <Route path='/monitor' element={<Monitor />} />
          <Route path='/dangerReport' element={<DangerReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
