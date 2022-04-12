import { Card } from 'antd'
import { create } from 'domain'
import React, { useEffect, useState } from 'react'

function MyCard() {
  const [loading, setLoading] = useState(true)
  const getData = () => {
    setTimeout(() => {
      setLoading(false)
    }, 10000)
  }
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <Card loading={loading}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}
export default MyCard
