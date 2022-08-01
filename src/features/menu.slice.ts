import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const menuSlice = createSlice( {
    name: "menu",
    initialState: {
        isOpen: false,
    },
    reducers: {
        setIsOpen: ( state, action: PayloadAction<boolean> ) => {
            state.isOpen = action.payload;
        }
    }
} )

export const { setIsOpen } = menuSlice.actions;
export default menuSlice.reducer;