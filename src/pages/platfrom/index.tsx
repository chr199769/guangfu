import { Layout } from 'antd'
import React from 'react'
import LineContainer from './LineContainer'
import Map from './Map'
import PieContainer from './PieContainer'

function Platfrom() {
  return (
    <div style={{ height: '100%' }}>
      <Layout >
        <Layout>
          <Layout.Sider width='20%'/>
          <Layout.Content>
            <Map/>
          </Layout.Content>
          <Layout.Sider  width='20%'>  
            <LineContainer />
          </Layout.Sider>
        </Layout>
        <Layout.Footer>
          <PieContainer />
        </Layout.Footer>
      </Layout>
    </div>
  )
}

export default Platfrom