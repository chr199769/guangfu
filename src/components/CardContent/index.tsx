import React from "react"
import styles from './index.module.less'

function CardContent() {
  return (
    <div className={styles['card-content']}>
      <div>当日发电</div>
      <div>90000</div>
      <div>kwh</div>
    </div>
    
  )
}
export default CardContent