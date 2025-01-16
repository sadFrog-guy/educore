import React, {useEffect} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Row} from "antd";
import StudentsTable from "../modules/tables/StudentsTable.tsx";
import FilterPanel from "../modules/filters/FilterPanel.tsx";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import CreateUserModal from "../modules/modals/CreateUserModal.tsx";
import * as Yup from "yup";

const Students = () => {

    const { Student, User } = useStore();

    useEffect(() => {
        User.getAll()
    },[])



    const actions = [
        {label: 'Добавить', type: 'primary', modal: <CreateUserModal/>, callback: () => User.openModal()},
        {label: 'Изменить', type: '', modal: <></>, callback: () => console.log('Изменить')},
        {label: 'Удалить', type: '', modal: <></>, callback: () => console.log('Удалить')},
    ]

    return (
        <Template>
            <ActionBar actions={actions}/>
            <Row gutter={16}>
                <Col span={20}>
                    <Card bordered={false} style={{ width: '100%' }} size={'small'}>
                        <StudentsTable dataSource={User.objects} loading={User.isLoading} rowKey="id" />
                    </Card>
                </Col>
                <Col span={4}>
                    <FilterPanel/>
                </Col>
            </Row>
        </Template>
    );
};

export default observer(Students);