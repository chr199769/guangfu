import React from 'react'
import LineContainer from '../../components/LineContainer'
import CardContainer from './CardContainer'
import Map from './Map'
import PieContainer from './PieContainer'
import styles from './index.module.less'

function Platfrom() {

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <div style={{ display: 'flex', height: '70%', width: '100%' }}>
        <CardContainer />
        <Map/>
        <LineContainer width='30%'/>
      </div>
      <div style={{ height: '30%', width: '100%' }}>
        <PieContainer />
      </div>
    </div>
  )
}

export default Platfrom 