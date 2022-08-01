import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        isOpenContact: false
    },
     reducers: {
        setContactIsOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpenContact = action.payload;
        }
     }
})

export const { setContactIsOpen } = contactSlice.actions;
export default contactSlice.reducer;