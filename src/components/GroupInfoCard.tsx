import { Skeleton, Flex, Typography, Button, Space } from 'antd';
import React from 'react'
import { useStore } from '../contexts/store/RootStoreContext';
import { groupAssociations } from '../utils/associations';
import formatDateForDisplay from '../utils/formatDateForDisplay';
import StandartCard from './StandartCard';
import StatusTag from './StatusTag';
import { observer } from 'mobx-react-lite';
import ActionButtons from './ActionButtons';

const { Title } = Typography;
const { Text } = Typography;

function GroupInfoCard() {
  const { Group } = useStore();
  const actions = [
    {label: 'Изменить', type: 'link', modal: <></>, callback: () => console.log('Изменить')},
    {label: 'Подробности', type: 'link', modal: <></>, callback: () => console.log('Подробности')},
  ]

  return (
    <StandartCard
      isLoading={Group.isLoading}
      loadingElement={<Skeleton active paragraph={{ rows: 1 }} style={{ width: '100%' }} />}
    >
      <Title level={3}>
        {Group.current?.name}
      </Title>
      
      <Flex justify='space-between' align='center'>
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

        <Flex>
          <ActionButtons actions={actions}/>
        </Flex>
      </Flex>
    </StandartCard>
  )
}

export default observer(GroupInfoCard);