import React from "react"
import styles from './index.module.less'

interface Props {
  type: string;
  data: number;
  unit: string;
}
function CardContent(props: Props) {
  const { type, data, unit } = props
  
  return (
    <div className={styles['card-content']}>
      <div>{type}</div>
      <div>{data}</div>
      <div>{unit}</div>
    </div>
    
  )
}
export default CardContent