import React from 'react';
import {ConfigProvider, Table, theme} from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
    data: TableColumnsType;
    key: React.Key;
    first_name: string;
    last_name: string;
    groups_count: number;
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
        title: 'Группы',
        dataIndex: 'groups_count',
    },
];

const StudentsTable = (props) => (
    <Table<DataType> columns={columns} {...props}/>
);

export default StudentsTable;