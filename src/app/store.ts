import { configureStore } from "@reduxjs/toolkit";
import menuReducer from '../features/menu.slice';
import contactReducer from '../features/contact.slice';
import subMenuReducer from '../features/subMenu.slice';

const store =  configureStore( {
    reducer: {
        menu: menuReducer,
        contact: contactReducer,
        subMenu: subMenuReducer
    }
} )

export default store;
export type RootState = ReturnType<typeof store.getState>;