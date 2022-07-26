import { FC } from 'react'
import Home from "./Layouts/Home";
import { AnimatePresence } from "framer-motion";

const App: FC = () => {

    return (
        <AnimatePresence>
            <Home/>
        </AnimatePresence>
    )
}

export default App
