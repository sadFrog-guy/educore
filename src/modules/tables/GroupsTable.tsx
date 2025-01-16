import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
    data: TableColumnsType;
    key: React.Key;
    name: string;
    start_date: number;
    end_date: number;
}

const columns: TableColumnsType<DataType> = [
    {
        title: 'Название',
        dataIndex: 'name',
    },
    {
        title: 'Дата начала',
        dataIndex: 'start_date',
    },
    {
        title: 'Дата конца',
        dataIndex: 'end_date',
    },
];

const GroupsTable = (props) => (
    <Table<DataType> columns={columns} {...props}/>
);

export default GroupsTable;