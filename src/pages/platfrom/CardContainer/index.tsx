import React from 'react'
import CardContent from '../../../components/CardContent'
import MyCard from '../../../components/MyCard'

function CardContainer() {
  const renderDateCard = () => (
    <>
      <CardContent />
      <CardContent />
    </>
  )

  const renderPowerCard = () => (
    <>
      <CardContent />
      <CardContent />
      <CardContent />
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