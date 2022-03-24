import React from 'react'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

function MyAvatar() {
  return (
    <>
      <Avatar size="large" icon={<UserOutlined style={{ fontSize: '20px' }}/>} />
      <span style={{ marginLeft: '5px' }}>开发者</span>
    </>

  )
}

export default MyAvatar