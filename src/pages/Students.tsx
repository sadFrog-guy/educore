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
import StandartCard from '../components/StandartCard.tsx';

const Students = () => {
    const { Student, User } = useStore();

    useEffect(() => {
        User.getAll()
    },[])


    const actions = [
        {label: 'Добавить', type: 'primary', modal: <CreateUserModal/>, callback: () => User.modals.openModal('create')},
        {label: 'Изменить', type: '', modal: <></>, callback: () => console.log('Изменить')},
        {label: 'Удалить', type: '', modal: <></>, callback: () => console.log('Удалить')},
    ]

    return (
        <Template>
            <ActionBar actions={actions}/>
            <Row gutter={16}>
                <Col span={20}>
                    <StandartCard>
                        <StudentsTable dataSource={User.objects} loading={User.isLoading} rowKey="id" />
                    </StandartCard>
                </Col>
                <Col span={4}>
                    <FilterPanel/>
                </Col>
            </Row>
        </Template>
    );
};

export default observer(Students);