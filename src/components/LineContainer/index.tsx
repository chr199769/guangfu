import React from 'react'
import BaseColumn from '../BaseColumn'
import BaseLine from '../BaseLine'
import MyCard from '../MyCard'

interface Props {
  width: string;
  cardClass?: any;
}

const LineContainer = (props: Props) => {
  const { width, cardClass } = props;

  return (
    <div style={{ width }}>
      <MyCard
        className={cardClass}
        title='当月发电量'
        children={<BaseLine />}
      />
      <MyCard
        className={cardClass}
        title='输出功率曲线'
        children={<BaseLine />}
      />
    </div>
  )
}

export default LineContainer