import {useStore} from "../../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import StudentsTable from "../../modules/tables/StudentsTable.tsx";
import {useEffect, useState} from "react";
import React from 'react';
import {
    Button,
    Card,
    Col,
    Flex,
    Input,
    RadioChangeEvent,
    Radio,
    Row,
    Space,
} from 'antd';
import { Layout, theme } from 'antd';
import MySider from "../../modules/layout/MySider.tsx";
import MyHeader from "../../modules/layout/MyHeader.tsx";
import MyFooter from "../../modules/layout/MyFooter.tsx";
import ActionBar from "../../modules/layout/ActionBar.tsx";
import FilterPanel from "../../modules/filters/FilterPanel.tsx";

const { Content } = Layout;

// const {
//     token: { colorBgContainer, borderRadiusLG, colorBgBase },
// } = theme.useToken();

const Template = ({children}) => {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <MySider/>
            <Layout>
                <MyHeader/>
                <Content style={{ margin: '0 16px' }}>
                    <Flex vertical={true} gap={'middle'}>
                        {children}
                    </Flex>
                </Content>
                <MyFooter/>
            </Layout>
        </Layout>
    );
};

export default observer(Template);

