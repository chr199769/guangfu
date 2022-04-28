import React from 'react';
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom';
import './App.less';
import LeftSider from './components/LeftSider';
import DangerReport from './pages/dangerReport';
import Monitor from './pages/monitor';
import Platfrom from './pages/platfrom';
import Header from './components/Header';

const { Content, Sider } = Layout
function App() {
  return (
    <Layout className='App'>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout>
        <Sider>
          <LeftSider />
        </Sider>
        <Content>
          <Routes>
            <Route path='platform' element={<Platfrom />} />
            <Route path='monitor/:deviceId' element={<Monitor />} />
            <Route path='dangerReport' element={<DangerReport />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
