import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.less';
import LeftSider from './compoents/LeftSider';
import DangerReport from './pages/dangerReport';
import Login from './pages/login';
import Monitor from './pages/monitor';
import Platfrom from './pages/platfrom';

const { Content, Sider } = Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Layout className='App'>
        <Sider>
          <LeftSider />
        </Sider>
        <Content>
          <Routes>
            <Route path='/platform' element={<Platfrom />} />
            <Route path='/monitor' element={<Monitor />} />
            <Route path='/dangerReport' element={<DangerReport />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>

  );
}

export default App;
