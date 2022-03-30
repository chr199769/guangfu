import { Layout } from 'antd'
import React from 'react'
import Map from './Map'

function Platfrom() {
  return (
    <div style={{ height: '1000px' }}>
      <Layout >
        <Layout>
          <Layout.Sider />
          <Layout.Content>
            <Map/>
          </Layout.Content>
          <Layout.Sider />
        </Layout>
        <Layout.Footer />
      </Layout>
    </div>
  )
}

export default Platfrom