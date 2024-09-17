import { CalendarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import { Text } from '../text'

const UpComingEvents = () => {
  return (
    <Card 
        style={{height: "100%" }} 
        styles={{ header: { padding: "8px 16px" }, body: { padding: "0 1rem" } }} 
        title={
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                }}>
                    <CalendarOutlined />
                    <Text>
                        Upcoming Events
                    </Text>
            </div>
        }
    >
        UpcomingEvents
    </Card>
  )
}

export default UpComingEvents