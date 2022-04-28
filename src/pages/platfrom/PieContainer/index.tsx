import React from 'react'
import BasePie from '../../../components/BasePie'
import styles from './index.module.less'

function PieContainer() {
  const factorData = [
    {
      type: '运行中',
      value: 10
    },
    {
      type: '故障',
      value: 2
    },
  ]

  const factorConfig = {
    angleField: 'value',
    colorField: 'type',
    color: ['#d62728', '#2ca02c'],
    data: factorData,
  }

  const powerData = [
    {
      type: '运行中',
      value: 10
    },
    {
      type: '故障',
      value: 2
    },
  ]

  const powerConfig = {
    angleField: 'value',
    colorField: 'type',
    color: ['red', '#2ca02c'],
    data: powerData,
  }

  return (
    <div className={styles['pie-container']}>
      <div className={styles['factor-info-container']}>
        <BasePie className={styles['pie']} config={factorConfig}/>
      </div>
      <div className={styles['env-info-container']}>
        <div className={styles['vertical-container']}>
         <BasePie className={styles['pie']} config={factorConfig}/>
         <BasePie className={styles['pie']} config={powerConfig}/>
        </div>
        <BasePie className={styles['big-pie']} config={powerConfig}/>
        <div className={styles['vertical-container']}>
         <BasePie className={styles['pie']} config={factorConfig}/>
         <BasePie className={styles['pie']} config={powerConfig}/>
        </div>
   
      </div>
      <div className={styles['power-info-container']}>
        <BasePie className={styles['pie']} config={factorConfig}/>
      </div>
    </div>
  )
}

export default PieContainer