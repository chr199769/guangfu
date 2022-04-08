import { Layout } from 'antd'
import React from 'react'
import LineContainer from './LineContainer'
import Map from './Map'
import PieContainer from './PieContainer'

function Platfrom() {
  return (
    <div style={{ height: '100%' }}>
      <Layout >
        <Layout style={{ flexGrow: 4 }}>
          <Layout.Sider width='20%'/>
          <Layout.Content>
            <Map/>
          </Layout.Content>
          <Layout.Sider  width='20%'>  
            <LineContainer />
          </Layout.Sider>
        </Layout>
        <Layout.Footer style={{ flexGrow: 1 }}>
          <PieContainer />
        </Layout.Footer>
      </Layout>
    </div>
  )
}

export default Platfrom