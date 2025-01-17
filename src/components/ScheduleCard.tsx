import { Button, Card, Flex, theme, Typography } from 'antd';
import { observer } from 'mobx-react-lite'
import React from 'react'
import StandartCard from './StandartCard';

const { Title } = Typography
const { Text } = Typography

function ScheduleCard({
  color = "#3174AD",
  day,
  startTime,
  endTime,
  teacher,
  room
}) {
  const { token } = theme.useToken();

  return (
    <Card
      bordered={false}
      style={{
        borderColor: token.colorInfo,
        backgroundColor: `${token.colorInfo}20`,
        color: token.colorInfo,
      }}
    >
      <Flex vertical={true}>
        <Flex gap={12}>
          <Title level={5}>
            {day}
          </Title>

          <Text>
            {startTime} - {endTime}
          </Text>
        </Flex>

        <Text>
          {teacher}
        </Text>

        <Text>
          {room}
        </Text>
      </Flex>
    </Card>
  )
}

export default ScheduleCard;