import React from 'react'
import StandartCard from './StandartCard'
import { Flex, Skeleton } from 'antd';
import { useStore } from '../contexts/store/RootStoreContext';
import GroupsMembersTable from '../modules/tables/GroupsMembersTable';
import { observer } from 'mobx-react-lite';
import ActionButtons from './ActionButtons';

function GroupMembersCard() {
  const { Group } = useStore();
  const actions = [
    {label: 'Добавить', type: 'primary', modal: <></>, callback: () => console.log('Изменить')},
    {label: 'Изменить', type: '', modal: <></>, callback: () => console.log('Изменить')},
    {label: 'Удалить', type: '', modal: <></>, callback: () => console.log('Удалить')},
  ]

  return (
    <StandartCard
      isLoading={Group.isLoading}
      loadingElement={<Skeleton active paragraph={{ rows: 4 }} style={{ width: '100%' }} />}
    >
      <Flex gap={10} vertical={true}>
        <ActionButtons
          actions={actions}
        />
        <GroupsMembersTable 
          dataSource={Group.current.members} 
          loading={Group.isLoading} 
          rowkey="id"
        />
      </Flex>
    </StandartCard>
  )
}

export default observer(GroupMembersCard);