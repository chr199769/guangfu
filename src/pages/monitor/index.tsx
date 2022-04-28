import React from 'react'
import { useParams } from 'react-router-dom'
import LineContainer from '../../components/LineContainer'
import MyCard from '../../components/MyCard'
import styles from './index.module.less'

function Monitor() {
  const { deviceId } = useParams()
  return (
    <>
      <div className={styles['monitor-container']}>
        <MyCard />
        <LineContainer />
      </div>
    </>
  )
}

export default Monitor