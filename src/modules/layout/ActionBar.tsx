import React from 'react';
import {Button, Card, Space} from "antd";

const ActionBar = ({actions}) => {
    return (
        <Card bordered={false} style={{ width: '100%'}} size={'small'}>
            <Space>
                {actions.map((action, index) => (
                    <div key={index}>
                        <Button
                            type={action.type || 'default'}
                            onClick={action.callback}
                            disabled={!action.callback}
                        >
                            {action.label}
                        </Button>
                        {action.modal}
                    </div>
                ))}
            </Space>
        </Card>
    );
};

export default ActionBar;