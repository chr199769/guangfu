import React from 'react'
import { Pie, PieConfig } from '@ant-design/plots'
import { ChartsProps } from '../../typings'
import { DatePicker } from 'antd'


const BasePie = (props: ChartsProps) => {
  const { config, className } = props

  const pieConfig: PieConfig = {
    renderer: 'svg',
    
    // theme :'dark',
    radius: 1,
    innerRadius: 0.6,
    label: null,
    legend: false,
    statistic: {
      title: false,
      content: {
        content: '数量',
      },
    
    },
    ...config,
  }
  return (
    <div className={className}>
      <Pie {...pieConfig} />
    </div>
  )
}

export default BasePie