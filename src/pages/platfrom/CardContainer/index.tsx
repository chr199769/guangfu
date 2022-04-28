import React from 'react'
import CardContent from '../../../components/CardContent'
import MyCard from '../../../components/MyCard'

function CardContainer() {
  const data = {
    daypower: 10000,
    monthpower: 100000
  }
  const renderDateCard = () => (
    <>
      {/* <CardContent />
      <CardContent /> */}
    </>
  )

  const renderPowerCard = () => (
    <>
      <CardContent type="当日发电" data={data.daypower} unit="kwh" />
      <CardContent type="当月发电" data={data.monthpower} unit="kwh" />
      <CardContent type="累计发电" data={data.monthpower} unit="kwh" />
      <CardContent type="碳减排" data={data.monthpower} unit="kg" />
    </>
  )
  return (
    <>
      <MyCard children={renderDateCard()}/> 
      <MyCard children={renderPowerCard()}/> 
    </>
  )
}

export default CardContainer