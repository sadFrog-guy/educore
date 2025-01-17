import React from 'react';
import {useStore} from "../../contexts/store/RootStoreContext.tsx";
import GenerateForm from "../../blocks/GenerateForm.tsx";
import {Modal} from "antd";
import * as Yup from "yup";
import {observer} from "mobx-react-lite";

const CreateGroupModal = () => {

    const { Group } = useStore();

    const options = ['RECRUITING', 'ACTIVE', 'COMPLETED', 'INACTIVE']

    const formSchema = {
        store: Group,
        schema: {
            name: {
                validationMethod: Yup.string().required('Group name is required'),
                initialValue: '',
                type: '',
            },
            start_date: {
                validationMethod: Yup.date().required('Start date is required').nullable(),
                initialValue: null,
                type: 'date',
            },
            end_date: {
                validationMethod: Yup.date().required('End date is required').nullable(),
                initialValue: null,
                type: 'date',
            },
            status: {
                options,
                validationMethod: Yup.string().oneOf(options,'Invalid status').required('Status is required').nullable(),
                initialValue: 'RECRUITING',
                type: 'select',// Статус по умолчанию
            },
        },
        successMessage: 'Group successfully created!',
        preventiveValue: {
            branch: 1
        },
        modalType: 'create',
        // handleSubmit: () => {}
    };

    return (
        <Modal
            title="Create Group"
            open={Group.modals.isCreateOpen}
            onCancel={() => Group.modals.closeModal('create')}
            footer={null} // Мы будем использовать кастомные кнопки
            destroyOnClose
        >
            <GenerateForm formSchema={formSchema}/>
        </Modal>
    );
};

export default observer(CreateGroupModal);