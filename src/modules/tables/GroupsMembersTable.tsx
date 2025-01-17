import { Button, Flex, Space, Table, TableColumnsType } from 'antd';
import React from 'react'
import StatusTag from '../../components/StatusTag';
import { studentAssociations } from '../../utils/associations';
import EnterButton from '../../components/EnterButton';

interface DataType {
    data: TableColumnsType;
    key: React.Key;
    first_name: string;
    last_name: string;
    status: string;
}

const columns: TableColumnsType<DataType> = [
    {
      title: 'Имя',
      dataIndex: 'first_name',
    },
    {
      title: 'Фамилия',
      dataIndex: 'last_name',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      render: (tag) => (
        <StatusTag 
          associations={studentAssociations}
          name={tag}
          tag={tag}
        />
      )
    },
];

export default function GroupsMembersTable(props) {
  return <Table<DataType> columns={columns} {...props}/>
}
