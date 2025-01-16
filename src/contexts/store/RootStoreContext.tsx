import React, { createContext, useContext } from 'react';

import BrancheStore from '../../stores/BrancheStore.ts';
import StudentStore from "../../stores/StudentStore.ts";
import GroupStore from "../../stores/GroupStore.ts";
import UserStore from "../../stores/UserStore.ts";

// Экземпляры сторов
const Branche = new BrancheStore();
const Student = new StudentStore();
const Group = new GroupStore();
const User = new UserStore();

const stores = {

    Branche,
    Student,
    Group,
    User
};

// Создаем контекст, который будет хранить все store
const RootStoreContext = createContext(stores);

// Хук для получения всех store
export const useStore = () => useContext(RootStoreContext);

// Экспортируем провайдер, который будет оборачивать приложение
export const RootStoreProvider = ({ children }: { children: React.ReactNode }) => (
    <RootStoreContext.Provider value={stores}>
        {children}
    </RootStoreContext.Provider>
);
