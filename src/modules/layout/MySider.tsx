import React, {useState} from 'react';
import {Avatar, Card, Col, ConfigProvider, Flex, Layout, Menu, MenuProps, Row, theme, Typography} from "antd";
import {
    CodepenOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Link, useNavigate} from "react-router";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Develop', '/', <PieChartOutlined />),
    getItem('Студенты', '/students', <DesktopOutlined />),
    getItem('Группы', '/groups', <DesktopOutlined />),
    getItem('Уроки', '/lessons', <DesktopOutlined />),
    getItem('График', '/schedule', <DesktopOutlined />),
    // getItem('User', 'sub1', <UserOutlined />, [
    //     getItem('Tom', '3'),
    //     getItem('Bill', '4'),
    //     getItem('Alex', '5'),
    // ]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    // getItem('Files', '9', <FileOutlined />),
];





const MySider = () => {

    const navigate = useNavigate();

    function onClickHandler({key}) {
        navigate(key)
    }

    const [collapsed, setCollapsed] = useState(false);
    const { Text, Link } = Typography;
    return (
        <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Flex vertical={true} justify="space-between" style={{height:'100%'}}>
                {/*<div className="demo-logo-vertical"/>*/}
                <Flex vertical={true} style={{margin: '10px 0 0'}}>
                    <Card size={'small'} style={{margin: '0 10px 8px'}}>
                        <Row>
                            <Col span={4}>
                                <Flex style={{height: '100%'}} justify={'center'} align={'center'}>
                                    <CodepenOutlined />
                                </Flex>
                            </Col>
                            <Col push={2}>
                                <Flex vertical={true} justify={'center'}>
                                    <Text>Бишкек</Text>
                                    <Text type="secondary">пр. Мира 15</Text>
                                </Flex>
                            </Col>
                        </Row>
                    </Card>
                    <Menu defaultSelectedKeys={[window.location.pathname]} onClick={onClickHandler} theme="light"
                          mode="inline" items={items}/>
                </Flex>
                <Card size={'small'} style={{margin: '0 10px'}}>
                    <Row>
                        <Col span={6}>
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                        </Col>
                        <Col span={18}>
                            <Flex vertical={true} justify={'center'}>
                                <Text>Оно Огава</Text>
                                <Text type="secondary">Преподаватель</Text>
                            </Flex>
                        </Col>
                    </Row>
                </Card>
            </Flex>
        </Sider>
    );
};

export default MySider;