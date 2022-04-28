import { Card } from 'antd'
import { create } from 'domain'
import React, { Children, useEffect, useState } from 'react'
import CardContent from '../CardContent'
import styles from './index.module.less'

interface Props {
  children?: any;
}
function MyCard(props: Props) {
  const { children } = props
  
  return (
    <Card className={styles.card} bodyStyle={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: '100%',
    }}>
      {children}
    </Card>
  )
}
export default MyCard
