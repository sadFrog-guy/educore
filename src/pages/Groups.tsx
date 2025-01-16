import React, {useEffect} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Row} from "antd";
import StudentsTable from "../modules/tables/StudentsTable.tsx";
import FilterPanel from "../modules/filters/FilterPanel.tsx";
import {useStore} from "../contexts/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import GroupsTable from "../modules/tables/GroupsTable.tsx";

const Groups = () => {

    const { Group } = useStore();

    useEffect(() => {
        Group.getAll()
    },[])

    return (
        <Template>
            <ActionBar/>
            <Row gutter={16}>
                <Col span={20}>
                    <Card bordered={false} style={{ width: '100%' }} size={'small'}>
                        <GroupsTable dataSource={Group.objects} loading={Group.isLoading} rowKey="id" />
                    </Card>
                </Col>
                <Col span={4}>
                    <FilterPanel/>
                </Col>
            </Row>
        </Template>
    );
};

export default observer(Groups) ;
