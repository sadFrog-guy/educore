import React, {useState} from 'react';
import {Card, Flex, Input, Radio, RadioChangeEvent, Space} from "antd";

const FilterPanel = () => {

    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Flex vertical={true}>
            <Card bordered={false} title={'Фильтры'} style={{ width: '100%', borderRadius: '10px 10px 0 0'  }} size={'small'}>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Оплата на этой неделе</Radio>
                        <Radio value={2}>Студенты без группы</Radio>
                        <Radio value={3}>Должники</Radio>
                        <Radio value={4}>
                            Еще...
                            {value === 4 ? <Input style={{ width: 100, marginInlineStart: 10 }} /> : null}
                        </Radio>
                    </Space>
                </Radio.Group>
            </Card>
            <Card bordered={false} title={'Сортировка'} style={{ width: '100%', borderRadius: '0 0 10px 10px' }} size={'small'}>
                <Radio.Group value={value}>
                    <Space direction="vertical">
                        <Radio value={1}>Оплата на этой неделе</Radio>
                        <Radio value={2}>Студенты без группы</Radio>
                        <Radio value={3}>Должники</Radio>
                        <Radio value={4}>
                            Еще...
                            {value === 4 ? <Input style={{ width: 100, marginInlineStart: 10 }} /> : null}
                        </Radio>
                    </Space>
                </Radio.Group>
            </Card>
        </Flex>
    );
};

export default FilterPanel;