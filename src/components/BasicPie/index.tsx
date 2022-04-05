import React from 'react'
import { Pie, PieConfig } from '@ant-design/plots'

interface PieProps {
  config: any,
  className: any,
}

const BasicPie = (props: PieProps) => {
  const { config, className } = props

  const pieConfig: PieConfig = {
    width: 100,
    height: 100,
    renderer: 'svg',
    radius: 1,
    innerRadius: 0.6,
    label: null,
    legend: false,
    statistic: {
      title: false,
      content: {
        content: '123'
      }
    },
    ...config,
  }
  return (
    <div className={className}>
      <Pie {...pieConfig} />
    </div>
  )
}

export default BasicPie