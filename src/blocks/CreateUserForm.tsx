import React from 'react';

import {Button, Form, Input, Modal, notification} from "antd";
import {Formik} from "formik";
import {useStore} from "../contexts/RootStoreContext.tsx";
import * as Yup from "yup";

const CreateUserForm = () => {

    const { User } = useStore();

    // Валидация с помощью Yup
    const validationSchema = Yup.object({
        first_name: Yup.string().required('First Name is required'),
        last_name: Yup.string().required('Last Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    // Отправка данных на сервер
    const handleSubmit = async (values) => {
        User.setLoading(true)
        setTimeout(async () => {
            const response = await User.create({...values, role: 'student', branch: 1})
            if (response.status == 201) {
                await User.getAll()
                User.closeModal()
                Modal.success()
                notification.success({
                    message: 'Успех!',
                    description: 'Студент успешно создан.',
                    placement: 'topRight', // Можно настроить расположение
                });
            }

        }, 1000)
    }

    // @ts-ignore
    return (
        <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                username: '',
                email: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty, values, handleChange, handleSubmit, errors, touched, handleBlur }) => (
                <Form layout="vertical" onFinish={handleSubmit}
                >
                    <Form.Item
                        label="First Name"
                        validateStatus={touched.first_name && errors.first_name ? 'error' : ''}
                        help={touched.first_name && errors.first_name}
                    >
                        <Input
                            name="first_name"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        validateStatus={touched.last_name && errors.last_name ? 'error' : ''}
                        help={touched.last_name && errors.last_name}
                    >
                        <Input
                            name="last_name"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        validateStatus={touched.username && errors.username ? 'error' : ''}
                        help={touched.username && errors.username}
                    >
                        <Input
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        validateStatus={touched.email && errors.email ? 'error' : ''}
                        help={touched.email && errors.email}
                    >
                        <Input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={User.isLoading}
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

export default CreateUserForm;


