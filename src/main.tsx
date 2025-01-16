import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import { configure } from "mobx";

configure({
    enforceActions: "never",
});

createRoot(document.getElementById('root')!).render(
    <App />
)
