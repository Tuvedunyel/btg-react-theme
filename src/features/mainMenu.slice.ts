import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MenuObject = {
    ID: number,
    menu_order: number,
    title: string,
    slug: string,
    url: string,
    target: string,
    description: string,
    classes: string[]
    menu_item_parent: string
}
type Menu = MenuObject[];

export const mainMenuSlice = createSlice({
    name: 'mainMenu',
    initialState: {
        mainMenu: [ {
            ID: 0,
            menu_order: 0,
            title: 'Chargement...',
            slug: 'Chargement...',
            url: 'Chargement...',
            target: 'Chargement...',
            description: 'Chargement...',
            classes: ['Chargement...'],
            menu_item_parent: 'Chargement...'
        } ]
    },
    reducers: {
        setMainMenu: (state, action: PayloadAction<Menu>) => {
            state.mainMenu = action.payload;
        }
    }
})

export const { setMainMenu } = mainMenuSlice.actions;
export default mainMenuSlice.reducer;