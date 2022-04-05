import { Layout } from 'antd'
import React from 'react'
import Map from './Map'
import PieContainer from './PieContainer'

function Platfrom() {
  return (
    <div style={{ height: '100%' }}>
      <Layout >
        <Layout>
          <Layout.Sider />
          <Layout.Content>
            <Map/>
          </Layout.Content>
          <Layout.Sider />
        </Layout>
        <Layout.Footer style={{ height: '150px' }}>
          <PieContainer />
        </Layout.Footer>
      </Layout>
    </div>
  )
}

export default Platfrom