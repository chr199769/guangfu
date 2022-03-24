import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar'

function Sider() {
  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['platform']}
        mode="vertical"
        theme="dark"
      >
        <Menu.Item style={{height: '45px'}}>
          <Avatar />
        </Menu.Item>
        <Menu.Item key="platform" >
          <Link to='/platform'>platform</Link>
        </Menu.Item>
        <Menu.Item key="monitor" >
          <Link to='/monitor'>monitor</Link>
        </Menu.Item>
        <Menu.Item key="dangerReport" >
          <Link to='/dangerReport'>dangerReport</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Sider