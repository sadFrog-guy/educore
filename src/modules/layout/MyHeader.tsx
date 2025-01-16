import React, {useState} from 'react';
import {Button, Calendar, CalendarProps, Flex, Input, Layout, Popover} from "antd";
const { Header } = Layout;

import {
    BellOutlined, CalendarOutlined,
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined, PlusOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import BreadCrumbs from "./BreadCrumbs.tsx";
import {Dayjs} from "dayjs";

const {Search} = Input


const MyHeader = () => {
    const [open, setOpen] = useState(false);
    const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const wrapperStyle: React.CSSProperties = {
        width: 300,
    };

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Месяцы начинаются с 0
    let zero = ''
    if (month < 10) {
        zero = '0'
    }
    const day = date.getDate();
    const today = `${day}.${zero}${month}.${year}`


    return (
        <Header style={{ padding: 16, background: "none" }}>
            <Flex justify='space-between'>
                <Flex>
                    <BreadCrumbs/>
                </Flex>
                <Flex gap={10}>
                    <Search placeholder=""  style={{ width: 200 }} />
                    <Popover
                        content={
                            <div style={wrapperStyle}>
                                <Calendar fullscreen={false} onPanelChange={onPanelChange}/>
                            </div>
                        }
                        title="Календарь"
                        trigger="click"
                        open={open}
                        placement="bottom"
                        onOpenChange={handleOpenChange}
                    >
                        <Button icon={<CalendarOutlined />}>{today}</Button>
                    </Popover>
                    {/*<Badge count={4} size={'small'} offset={[0,0]}>*/}
                    <Button icon={<BellOutlined />}/>
                    {/*</Badge>*/}
                    <Button style={{width: 40}} icon={<PlusOutlined />}></Button>
                </Flex>
            </Flex>
        </Header>
    );
};

export default MyHeader;