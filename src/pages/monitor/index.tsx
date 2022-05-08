import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from "antd";

import BasePie from '../../components/BasePie'
import CardContent from '../../components/CardContent'
import LineContainer from '../../components/LineContainer'
import MyCard from '../../components/MyCard'
import styles from './index.module.less'
import guangfuImg from '../../static/guangfu.jpeg'

function Monitor() {
  const { deviceId } = useParams()
  const [data, setData] = useState(
    {
      capacity: 10000,
      deviceNum: 100,
    }
  )

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

  const renderCard = () => (
    <>
      <CardContent type="装机容量" data={data.capacity} unit="MW" />
      <CardContent type="接入设备" data={data.deviceNum} unit="台" />
    </>
  )
  return (
    <>
      <div className={styles['monitor-container']}>
        <div className={styles['monitor-info']} >
          <div>
            <MyCard children={renderCard()}/>
          </div>
          <div className={styles['monitor-info-pie']}>
            <BasePie className={styles['pie']} config={factorConfig}/>
            <BasePie className={styles['pie']} config={factorConfig}/>
          </div>
          <Image src={guangfuImg} />
        </div>
        <div className={styles['line-container']}>
          <LineContainer />
        </div>
      </div>
    </>
  )
}

export default Monitor