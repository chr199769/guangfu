import { Card } from 'antd'
import React from 'react'
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
