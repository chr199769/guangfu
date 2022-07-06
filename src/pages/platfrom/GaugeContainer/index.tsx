import React from 'react'
import BasePie from '../../../components/BasePie'
import DemoGauge from '../../../components/DemoGauge'
import styles from './index.module.less'

function PieContainer() {


  return (
    <div className={styles['pie-container']}>
      <div className={styles['factor-info-container']}>
      <DemoGauge/>
      </div>
      <div className={styles['env-info-container']}>
        <div className={styles['vertical-container']}>
         <DemoGauge/>
         <DemoGauge/>
        </div>
        <DemoGauge/>
        <div className={styles['vertical-container']}>
         <DemoGauge/>
         <DemoGauge/>
        </div>
   
      </div>
      <div className={styles['power-info-container']}>
        {/* <BasePie className={styles['pie']} config={factorConfig}/> */}
        <DemoGauge/>
      </div>
    </div>
  )
}

export default PieContainer