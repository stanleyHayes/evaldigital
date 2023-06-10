import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {CONTACT_API} from "../../../api/contact";

const sendMessage = createAsyncThunk(
    'contacts/sendMessage',
    async ({values}, thunkAPI) => {
        try {
            const response = await CONTACT_API.sendMessage(values);
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            thunkAPI.rejectWithValue(message);
        }
    });

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(sendMessage.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(sendMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        }).addCase(sendMessage.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const {reducer} = contactSlice;

export const selectContact = state => state.contact;

export const CONTACT_ACTION_CREATORS = {sendMessage};

export default reducer;