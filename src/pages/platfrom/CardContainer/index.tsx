import React, { useEffect, useState } from 'react'
import CardContent from '../../../components/CardContent'
import MyCard from '../../../components/MyCard'
import dayjs from 'dayjs'
import { useInterval } from 'ahooks';

function CardContainer() {
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"))
  const [time, setTime] = useState<string>()
  const [weekday, setWeekday] = useState(dayjs().day())
  const data = {
    daypower: 10000,
    monthpower: 100000
  }
  const renderDateCard = () => (
    <>
      <div>{date}</div>
      <div>{time}</div>
      <div>星期{weekday}</div>
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

  useInterval(() => {
    const time = dayjs().format("HH：mm：ss") 
    setTime(time)
  }, 1000)
  
  return (
    <div style={{ width: '30%' }}>
      <MyCard children={renderDateCard()}/> 
      <MyCard children={renderPowerCard()}/> 
    </div>
  )
}

export default CardContainer