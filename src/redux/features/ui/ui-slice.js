import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        drawerOpen: false,
        language: 'EN',
    },
    reducers: {
        toggleDrawer: state => {
            state.drawerOpen = !state.drawerOpen;
        }
    }
});

const {reducer, actions} = uiSlice;
export const UI_ACTION_CREATORS = {toggleDrawer: actions.toggleDrawer};
export const selectUI = state => state.ui;
export default reducer;