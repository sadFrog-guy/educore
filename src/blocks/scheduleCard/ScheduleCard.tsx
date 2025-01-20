import {Button, Card, ConfigProvider, Flex, theme, Typography} from 'antd';
import { observer } from 'mobx-react-lite'
import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
const { Text } = Typography
import s from './ScheduleCard.module.css'

function ScheduleCard({
  color = "#3174AD",
  day,
  startTime,
  endTime,
  teacher,
  room,
    size = 'default'
}) {
  const { token } = theme.useToken();

  return (
      <ConfigProvider theme={{
        token: {
          colorTextBase: '#ffffff',
          colorPrimary: '#ffffff'
        },
      }}>
        <Flex vertical={true} className={s.card}>
            <Flex>
                <Text strong>
                {day} {startTime} - {endTime}
                </Text>
            </Flex>
            <Flex>
                <Text>
                    {teacher}
                </Text>
            </Flex>
            <Flex>
                <Text>
                    {room}
                </Text>
            </Flex>
            <Button
                type="link"
                icon={<CloseOutlined style={{ color: '#ffffff'}} />}
                // onClick={onDelete} // Функция для удаления
                className={s.closeIcon} // Убираем лишние отступы
            />
        </Flex>
      </ConfigProvider>
  )
}

export default ScheduleCard;