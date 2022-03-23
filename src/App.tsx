import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import DangerReport from './pages/dangerReport';
import Monitor from './pages/monitor';
import Platfrom from './pages/platfrom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/platform' element={<Platfrom />} />
        </Routes>
        <Routes>
          <Route path='/monitor' element={<Monitor />} />
        </Routes>
        <Routes>
          <Route path='/dangerReport' element={<DangerReport />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
