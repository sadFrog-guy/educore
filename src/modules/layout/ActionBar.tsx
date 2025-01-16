import React from 'react';
import {Button, Card, Space} from "antd";

const ActionBar = ({modals = [], callbacks = [] }) => {
    return (
        <Card bordered={false} style={{ width: '100%'}} size={'small'}>
            <Space>
                <div>
                    <Button type={'primary'} onClick={callbacks[0]}>Создать</Button>
                    {modals && modals.length > 0 ? modals[0] : ""}
                </div>
                <div>
                    <Button>Изменить</Button>
                    {modals && modals.length > 1 ? modals[1] : ""}
                </div>
                <div>
                    <Button>Удалить</Button>
                    {modals && modals.length > 2 ? modals[2] : ""}
                </div>
            </Space>
        </Card>
    );
};

export default ActionBar;