import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './base.scss'
import { Provider } from "react-redux";
import store from "./app/store";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot( document.getElementById( 'root' ) as HTMLElement ).render(
    <React.StrictMode>
        <Provider store={ store }>
            <AnimatePresence>
                <App/>
            </AnimatePresence>
        </Provider>
    </React.StrictMode>
)
