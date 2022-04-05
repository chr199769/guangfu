import React from 'react'
import BasicPie from '../../../components/BasicPie'
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
        <BasicPie className={styles['pie']} config={factorConfig}/>
        <BasicPie className={styles['pie']} config={powerConfig}/>
      </div>
      <div className={styles['env-info-container']}>
        <BasicPie className={styles['pie']} config={factorConfig}/>
        <BasicPie className={styles['pie']} config={powerConfig}/>
        <BasicPie className={styles['pie']} config={factorConfig}/>
        <BasicPie className={styles['pie']} config={powerConfig}/>
      </div>
      <div className={styles['power-info-container']}>
        <BasicPie className={styles['pie']} config={factorConfig}/>
      </div>
    </div>
  )
}

export default PieContainer