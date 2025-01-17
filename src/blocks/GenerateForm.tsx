import React from 'react';

import {Button, Form, Input, Modal, notification, DatePicker, Select} from "antd";
import {Formik} from "formik";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import * as Yup from "yup";
import {observer} from "mobx-react-lite";
import * as dayjs from "dayjs";

const GenerateForm = ({formSchema}) => {
    let {store, schema, handleSubmit, successMessage, preventiveValue, modalType} = formSchema;

    const defaultHandleSubmit = async function (values) {

        const transformedValues = Object.keys(values).reduce((acc, key) => {
            const value = values[key];

            // Проверяем, является ли значение объектом dayjs
            if (value && dayjs.isDayjs(value)) {
                // Преобразуем dayjs объект в ISO строку
                console.log(`Transforming ${key} from dayjs to ISO string:`, value.toISOString());
                acc[key] = value.format("YYYY-MM-DD");
            } else {
                // Если это не dayjs, просто копируем значение
                acc[key] = value;
            }
            return acc;
        }, {});

        store.setLoading(true)
        setTimeout(async () => {
            const response = await store.create({...transformedValues, ...preventiveValue})
            if (response.status == 201) {
                await store.getAll()
                store.modals.closeModal(modalType)
                notification.success({
                    message: 'Успех!',
                    description: successMessage,
                    placement: 'topRight', // Можно настроить расположение
                });
            }
        }, 1000)
    }

    if (!schema) {
        return <div>Loading...</div>; // Покажите индикатор загрузки или просто заглушку
    }

    preventiveValue = preventiveValue || {}
    successMessage = successMessage || 'Запись успешно создана'
    handleSubmit = handleSubmit || defaultHandleSubmit

    const fields = Object.keys(schema)

    const initialValues = Object.keys(schema).reduce((acc, key) => {
        acc[key] = schema[key].initialValue;
        return acc;
    }, {});

    let validationSchema = Object.keys(schema).reduce((acc, key) => {
        acc[key] = schema[key].validationMethod;
        return acc;
    }, {});

    validationSchema = Yup.object(validationSchema)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  errors,
                  touched,
                  handleBlur,
                  setFieldValue,
              }) => (
                <Form layout="vertical" onFinish={handleSubmit}>
                    {fields.map((fieldName) => {
                        const commonProps = {
                            name: fieldName,
                            value: values[fieldName],
                            onBlur: handleBlur,
                        };

                        let label = fieldName.replace('_', ' ');
                        label = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase();

                        return (
                            <Form.Item
                                key={fieldName}
                                label={label}
                                validateStatus={touched[fieldName] && errors[fieldName] ? 'error' : ''}
                                help={touched[fieldName] && errors[fieldName]}
                            >
                                {schema[fieldName].type === 'date' && (
                                    <DatePicker
                                        {...commonProps}
                                        style={{ width: '100%' }}
                                        onChange={(date, dateString) => {
                                            // Преобразование значения даты в нужный формат
                                            setFieldValue(fieldName, date);
                                        }}
                                    />
                                )}
                                {schema[fieldName].type === 'select' && (
                                    <Select
                                        {...commonProps}
                                        style={{ width: '100%' }}
                                        onChange={(value) => {
                                            // Установка выбранного значения
                                            setFieldValue(fieldName, value);
                                        }}
                                    >
                                        {schema[fieldName].options &&
                                            schema[fieldName].options.map((option) => (
                                                <Select.Option key={option} value={option}>
                                                    {option}
                                                </Select.Option>
                                            ))}
                                    </Select>
                                )}
                                {(!schema[fieldName].type || schema[fieldName].type === 'text') && (
                                    <Input
                                        {...commonProps}
                                        onChange={handleChange}
                                    />
                                )}
                            </Form.Item>
                        );
                    })}

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={store.isLoading}
                            block
                        >
                            Create Student
                        </Button>
                    </Form.Item>
                </Form>

            )}
        </Formik>
    );
};

export default observer(GenerateForm);


