import React from 'react';
import {useStore} from "../../contexts/store/RootStoreContext.tsx";

const CreateGroupModel = () => {

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
            course: {
                validationMethod: Yup.mixed().required('Course is required'),
                initialValue: null,
                type: '',// Для связи с моделью Course
            },
            start_date: {
                validationMethod: Yup.date().nullable().required('Start date is required'),
                initialValue: null,
                type: 'date',
            },
            end_date: {
                validationMethod: Yup.date().nullable().required('End date is required'),
                initialValue: null,
                type: 'date',
            },
            status: {
                options,
                validationMethod: Yup.string().oneOf(
                    options,
                    'Invalid status'
                ).required('Status is required'),
                initialValue: 'RECRUITING',
                type: 'select',// Статус по умолчанию
            },
        },
        successMessage: 'Group successfully created!',
        preventiveValue: {
            branch: 1
        },
        // handleSubmit: () => {}
    };

    return (
        <div>

        </div>
    );
};

export default CreateGroupModel;