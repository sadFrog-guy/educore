import React from 'react';
import { Breadcrumb } from 'antd';
import {HomeOutlined, UserOutlined} from "@ant-design/icons";

const BreadCrumbs: React.FC = () => (
    <Breadcrumb

        items={[
            {
                href: '',
                title: <HomeOutlined />,
            },
            {
                href: '',
                title: (
                    <>
                        <UserOutlined />
                        <span>Application List</span>
                    </>
                ),
            },
            {
                title: 'Application',
            },
        ]}
    />
);

export default BreadCrumbs;