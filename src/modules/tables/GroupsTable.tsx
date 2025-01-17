import React from 'react';
import { Flex, Table, Typography } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { RightSquareFilled, RightSquareOutlined, RightSquareTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router';

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
                <Flex align='center' gap={8}>
                    <Text>{name}</Text>

                    <RightSquareOutlined 
                        style={{
                            color: "white",
                            cursor: "pointer"
                        }} 
                        onClick={() => navigate(`/groups/${record.id}`)}
                    />
                </Flex>
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