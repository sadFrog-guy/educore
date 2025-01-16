import React, {useEffect, useState} from 'react';
import {Modal, Form, Input, Button, Select, message, notification} from 'antd';
import {useStore} from "../../contexts/store/RootStoreContext.tsx";
import {observer} from "mobx-react-lite";
import CreateUserForm from "../../blocks/CreateUserForm.tsx";

const CreateUserModal = ({children}) => {

    const { User } = useStore();

    return (
        <Modal
            title="Create Student"
            open={User.isCreateUserOpen}
            onCancel={() => User.closeModal()}
            footer={null} // Мы будем использовать кастомные кнопки
            destroyOnClose
        >
            <CreateUserForm/>
        </Modal>
    );
};

export default observer(CreateUserModal);
