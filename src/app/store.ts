import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../features/menu.slice';
import contactReducer from '../features/contact.slice';
import subMenuReducer from '../features/subMenu.slice';
import mainMenuReducer from '../features/mainMenu.slice';

const store =  configureStore( {
    reducer: {
        menu: menuReducer,
        contact: contactReducer,
        subMenu: subMenuReducer,
        mainMenu: mainMenuReducer
    }
} )

export default store;
export type RootState = ReturnType<typeof store.getState>;