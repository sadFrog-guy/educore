import React, {useEffect} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Divider, Row, Typography} from "antd";
import StudentsTable from "../modules/tables/StudentsTable.tsx";
import FilterPanel from "../modules/filters/FilterPanel.tsx";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import GroupsTable from "../modules/tables/GroupsTable.tsx";

const {Title} = Typography

const Develop = () => {

    const { Group } = useStore();

    useEffect(() => {
        Group.getAll()
    },[])

    return (
        <Template>
            <ActionBar/>
            <Row gutter={16}>
                <Col span={20}>
                    <Card bordered={false}>
                        <Title level={4} >
                            Эйкити Анидзука 22 года
                        </Title>
                        <Divider>
                            Посещения
                        </Divider>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card bordered={false}>
                        Посещения
                    </Card>
                </Col>
            </Row>
        </Template>
    );
};

export default observer(Develop) ;
