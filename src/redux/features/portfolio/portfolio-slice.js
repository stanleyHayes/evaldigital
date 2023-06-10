import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {PORTFOLIO_API} from "../../../api/portfolio";
import {portfolio} from "./portfolio";

const getWorks = createAsyncThunk(
    'contacts/getWorks',
    async ({values}, thunkAPI) => {
        try {
            const response = await PORTFOLIO_API.getWorks(values);
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
        error: null,
        portfolio: [...portfolio]
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getWorks.pending, state => {
            state.loading = true;
            state.error = null;
        }).addCase(getWorks.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.portfolio = action.payload.data;
        }).addCase(getWorks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

const {reducer} = contactSlice;

export const selectPortfolio = state => state.portfolio;

export const PORTFOLIO_ACTION_CREATORS = {getWorks};

export default reducer;