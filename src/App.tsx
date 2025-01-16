import React from 'react';
// import { ThemeProvider } from './contexts/themeContext/ThemeContext.tsx';
import Template from './pages/template/Template.tsx';
// import './contexts/themeContext/themes.css';
import { RootStoreProvider } from './contexts/store/RootStoreContext.tsx';
import {observer} from "mobx-react-lite";
import AppRoutes from "./routes/AppRoutes.tsx";
import {ConfigProvider, theme} from "antd";
import themeToken from "./theme/themeToken.ts";

const App = () => {

    return (
        // <ThemeProvider>
            <RootStoreProvider>
                <ConfigProvider
                    theme={themeToken}
                >
                    <AppRoutes />
                </ConfigProvider>
            </RootStoreProvider>
        // </ThemeProvider>
    );
};

export default observer(App);
