import { Card } from 'antd'
import React from 'react'
import styles from './index.module.less'

interface Props {
  children?: any;
  title?: string;
  bodyStyle?: any;
  headStyle?: any;
}
function MyCard(props: Props) {
  const { children, title, bodyStyle, headStyle } = props
  
  return (
    <Card 
      className={styles.card} 
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '100%',
        minWidth: '300px',
        ...bodyStyle,
      }}
      headStyle={{
        height: '40px',
        ...headStyle,
      }}
      title={title}
    >
      {children}
    </Card>
  )
}
export default MyCard
