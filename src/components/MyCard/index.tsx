import { Card } from 'antd'
import React from 'react'
import styles from './index.module.less'

interface Props {
  children?: any;
  title?: string;
  bodyStyle?: any;
  headStyle?: any;
  className?: any;
}
function MyCard(props: Props) {
  const { children, title, bodyStyle, headStyle, className = styles.card } = props
  
  return (
    <Card 
      className={className} 
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '90%',
        minWidth: '280px',
        ...bodyStyle,
      }}
      headStyle={{
        minHeight: '35px',
        height: '1%',
        lineHeight: '1%',
        ...headStyle,
        color:'white',
      }}
      title={title}
    >
      {children}
    </Card>
  )
}
export default MyCard
