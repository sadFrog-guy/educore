import React, {useEffect, useState} from 'react';
import {Modal, Form, Input, Button, Select, message, notification} from 'antd';
import {useStore} from "../../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import GenerateForm from "../../blocks/GenerateForm.tsx";
import * as Yup from "yup";

const CreateUserModal = ({children}) => {

    const { User } = useStore();

        const formSchema = {
            store: User,
            schema: {
                first_name: {
                    validationMethod: Yup.string().required('First Name is required'),
                    initialValue: ''
                },
                last_name: {
                    validationMethod: Yup.string().required('Last Name is required'),
                    initialValue: ''
                },
                username: {
                    validationMethod: Yup.string().required('Username is required'),
                    initialValue: ''
                },
                email: {
                    validationMethod: Yup.string().email('Invalid email format').required('Email is required'),
                    initialValue: ''
                },
            },
            successMessage: 'Студент успешно создан!',
            preventiveValue: {
                role: 'student',
                branch: 1
            }
            // handleSubmit: () => {}
        }

    return (
        <Modal
            title="Create Student"
            open={User.isCreateUserOpen}
            onCancel={() => User.closeModal()}
            footer={null} // Мы будем использовать кастомные кнопки
            destroyOnClose
        >
            <GenerateForm formSchema={formSchema}/>
        </Modal>
    );
};

export default observer(CreateUserModal);
