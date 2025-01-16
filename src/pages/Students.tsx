import React, {useEffect} from 'react';
import Template from "./template/Template.tsx";
import ActionBar from "../modules/layout/ActionBar.tsx";
import {Card, Col, Row} from "antd";
import StudentsTable from "../modules/tables/StudentsTable.tsx";
import FilterPanel from "../modules/filters/FilterPanel.tsx";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import CreateUserModal from "../modules/modals/CreateUserModal.tsx";

const Students = () => {

    const { Student, User } = useStore();

    useEffect(() => {
        User.getAll()
    },[])

    return (
        <Template>
            <ActionBar modals={[<CreateUserModal/>]} callbacks={[() => User.openModal()]}/>
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