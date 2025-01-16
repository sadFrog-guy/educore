import React from 'react';

import {Button, Form, Input, Modal, notification} from "antd";
import {Formik} from "formik";
import {useStore} from "../contexts/store/RootStoreContext.tsx";
import * as Yup from "yup";

const GenerateForm = ({formSchema}) => {
    let {store, schema, handleSubmit, successMessage, preventiveValue} = formSchema;

    const defaultHandleSubmit = async function (values) {
        store.setLoading(true)
        setTimeout(async () => {
            const response = await store.create({...values, ...preventiveValue})
            if (response.status == 201) {
                await store.getAll()
                store.closeModal()
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
              }) => (
                <Form layout="vertical" onFinish={handleSubmit}>
                    {fields.map((fieldName) => {

                        let label = fieldName.replace('_', ' ')
                        label = label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()
                        return (
                            <Form.Item
                                key={fieldName}
                                label={ label }
                                validateStatus={touched[fieldName] && errors[fieldName] ? 'error' : ''}
                                help={touched[fieldName] && errors[fieldName]}
                            >
                                <Input
                                    name={fieldName}
                                    value={values[fieldName]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
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

export default GenerateForm;


