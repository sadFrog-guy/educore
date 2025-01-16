import React, {useEffect} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Divider, Row, Typography} from "antd";
import StudentsTable from "../modules/tables/StudentsTable.tsx";
import FilterPanel from "../modules/filters/FilterPanel.tsx";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import GroupsTable from "../modules/tables/GroupsTable.tsx";
import CreateUserModal from "../modules/modals/CreateUserModal.tsx";

const {Title} = Typography

const Develop = () => {

    const { Group } = useStore();

    useEffect(() => {
        Group.getAll()
    },[])

    const actions = [
        {label: 'Добавить', type: 'primary', modal: <CreateUserModal/>, callback: () => console.log('Добавить')},
        {label: 'Изменить', type: '', modal: <></>, callback: () => console.log('Изменить')},
        {label: 'Удалить', type: '', modal: <></>, callback: () => console.log('Удалить')},
    ]

    return (
        <Template>
            <ActionBar actions={actions}/>
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
