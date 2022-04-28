import React from 'react'
import BaseColumn from '../BaseColumn'
import BaseLine from '../BaseLine'

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