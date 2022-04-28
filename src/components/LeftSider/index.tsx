import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import Avatar from '../Avatar'

function Sider() {
  let { pathname } = useLocation()
  pathname = pathname.split('/')[1]
  
  return (
    <div style={{ width: 200 }}>
      <Menu
        mode="vertical"
        theme="dark"
        selectedKeys={[pathname]}
      >
        <Menu.Item style={{height: '45px'}}>
          <Avatar />
        </Menu.Item>
        <Menu.Item key="platform" >
          <Link to='/platform'>platform</Link>
        </Menu.Item>
        <Menu.Item key="monitor" >
          <Link to='/monitor/1'>monitor</Link>
        </Menu.Item>
        <Menu.Item key="dangerReport" >
          <Link to='/dangerReport'>dangerReport</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Sider