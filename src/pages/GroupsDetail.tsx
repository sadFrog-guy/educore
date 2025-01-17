import { Row, Col, Card, Flex, Skeleton } from 'antd'
import React, { useEffect } from 'react'
import Template from './template/Template'
import { useStore } from '../contexts/store/RootStoreContext'
import { useParams } from 'react-router'
import { observer } from 'mobx-react-lite'
import GroupInfoCard from '../components/GroupInfoCard'
import GroupMembersCard from '../components/GroupMembersCard'
import StandartCard from '../components/StandartCard'
import ScheduleCard from '../components/ScheduleCard'
import ActionBar from '../modules/layout/ActionBar'
import ActionButtons from '../components/ActionButtons'
import GroupScheduleBar from '../components/GroupScheduleBar'

function GroupsDetail() {
  const {id} = useParams();
  const { Group } = useStore();

  useEffect(() => {
    Group.getById(id)

    return () => {
      Group.destroyCurrent()
    }
  }, [])

  return (
    <Template>
      <Row gutter={16}>
        <Col span={18}>
          <Flex vertical={true} gap={18}>
            <GroupInfoCard/>
            <GroupMembersCard/>
          </Flex>
        </Col>
        <Col span={6}>
          <GroupScheduleBar/>
        </Col>
      </Row>
  </Template>
  )
}

export default observer(GroupsDetail);