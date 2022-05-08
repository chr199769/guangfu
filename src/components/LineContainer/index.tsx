import React from 'react'
import BaseColumn from '../BaseColumn'
import BaseLine from '../BaseLine'
import MyCard from '../MyCard'

const LineContainer = () => {
  return (
    <>
      <MyCard
        bodyStyle={{ height: '300px' }}
        title='当月发电量'
        children={
        <div style={{height: '300px'}}>
          <BaseLine />
        </div>}
      />
      <MyCard
        bodyStyle={{ height: '300px' }}
        title='输出功率曲线'
        children={
        <div style={{height: '300px'}}>
          <BaseColumn />
        </div>}
      />
    </>
  )
}

export default LineContainer