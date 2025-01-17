import { Row, Col, Card, Flex, Skeleton } from 'antd'
import React, { useEffect } from 'react'
import Template from './template/Template'
import { useStore } from '../contexts/store/RootStoreContext'
import { useParams } from 'react-router'
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite'
import StatusTag from '../components/StatusTag'
import { groupAssociations } from '../utils/associations'
import StudentsTable from '../modules/tables/StudentsTable'
import GroupsMembersTable from '../modules/tables/GroupsMembersTable'
import formatDateForDisplay from '../utils/formatDateForDisplay'

const { Title } = Typography;
const { Text } = Typography;

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
          <Col span={16}>
            <Flex vertical={true} gap={18}>
              <Card bordered={false} style={{ width: '100%' }} size={'small'}>
                {Group.isLoading
                  ? <Skeleton active paragraph={{ rows: 1 }} style={{ width: '100%' }} />
                  : (
                    <>
                      <Title level={3}>
                        {Group.current?.name}
                      </Title>
                      
                      <Flex>
                        <StatusTag
                          associations={groupAssociations}
                          name={Group.current?.status_display}
                          tag={Group.current?.status}
                        />

                        <Text>
                          {formatDateForDisplay(Group.current?.start_date)} — {formatDateForDisplay(Group.current?.end_date)}
                        </Text>
                      </Flex>
                    </>
                  )
                }
              </Card>

              <Card bordered={false} style={{ width: '100%' }} size={'small'}>
                {Group.isLoading
                  ? <Skeleton active paragraph={{ rows: 4 }} style={{ width: '100%' }} />
                  : (
                    <GroupsMembersTable 
                      dataSource={Group.current.members} 
                      loading={Group.isLoading} 
                      rowkey="id"
                    />
                  )
                }
              </Card>
            </Flex>
          </Col>
          <Col span={8}>
            <Card bordered={false} style={{ width: '100%' }} size={'small'}>
              {id}
            </Card>
          </Col>
      </Row>
  </Template>
  )
}

export default observer(GroupsDetail);