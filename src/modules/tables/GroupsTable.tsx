import React from 'react';
import { Flex, Table, Typography } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { RightSquareFilled, RightSquareOutlined, RightSquareTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import EnterButton from '../../components/EnterButton';

interface DataType {
    data: TableColumnsType;
    key: React.Key;
    name: string;
    start_date: number;
    end_date: number;
    id: string;
}

const { Text } = Typography;

const GroupsTable = (props) => {
    const navigate = useNavigate();

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Название',
            dataIndex: 'name',
            render: (name, record: DataType) => (
                <EnterButton>
                    {name}
                </EnterButton>
            )
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

    return <Table<DataType> columns={columns} {...props}/>
};

export default GroupsTable;