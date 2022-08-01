import { FC } from 'react'
import Home from "./Layouts/Home";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

const App: FC = () => {
    const openMenu = useSelector( ( state: RootState ) => state.menu.isOpen );
    const openContact = useSelector( (state: RootState) => state.contact.isOpenContact )

    return (
        <AnimatePresence>
            <div className="App" style={ openMenu || openContact ? { overflow: 'hidden' } : { overflow: 'auto' } }>
                <Home/>
            </div>
        </AnimatePresence>
    )
}

export default App
