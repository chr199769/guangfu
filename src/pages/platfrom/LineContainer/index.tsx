import React from 'react'
import BaseColumn from '../../../components/BaseColumn'
import BaseLine from '../../../components/BaseLine'

const LineContainer = () => {
  return (
    <>
      <div style={{height: '350px'}}>
        <BaseLine />
      </div>
      <div style={{height: '350px'}}>
        <BaseColumn />
      </div>
    </>
  )
}

export default LineContainer