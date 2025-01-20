import { Empty, Flex, Skeleton, Typography } from 'antd'
import React from 'react'
import ActionButtons from '../components/ActionButtons.tsx'
import ScheduleCard from './scheduleCard/ScheduleCard.tsx'
import StandartCard from '../components/StandartCard.tsx'
import { useStore } from '../contexts/store/RootStoreContext.tsx'
import { observer } from 'mobx-react-lite'
import { SettingOutlined } from '@ant-design/icons'

const { Title } = Typography;

function GroupScheduleBar() {
  const { Group } = useStore();
  const actions = [
    {label: <SettingOutlined />, type: '', modal: <></>, callback: () => console.log('Изменить'), shape: "circle"},
  ]

  return (
    <StandartCard>
      <Flex gap={10} vertical={true}>
        <Flex align='center' justify='space-between'>
          <Title level={4}>
            График
          </Title>

          <ActionButtons actions={actions}/>
        </Flex>

        {Group.isLoading
          ? (
            <>
              <Skeleton.Node active style={{minWidth: "100%"}}/>
              <Skeleton.Node active style={{minWidth: "100%"}}/>
              <Skeleton.Node active style={{minWidth: "100%"}}/>
            </>
          )
          : (
            <ScheduleCard
              day="Понедельник"
              startTime="16:00"
              endTime="18:00"
              teacher="Адилет Касымбаев"
              room="Кабинет №2"
            />
          )
          // : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        }
      </Flex>
    </StandartCard>
  )
}

export default observer(GroupScheduleBar)