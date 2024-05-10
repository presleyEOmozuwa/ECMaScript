import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './AuthorService';

const initialState = {
    firstname: '',
    lastname: '',
    gender: '',
    loading: false,
    isRegistered: false,
    status: '',
    error: ''
}

const authorSlice = createSlice({
    name: 'author',
    initialState,
    reducers: {
        fnameaction: (state, action) => {
            state.firstname = action.payload;
        },
        lnameaction: (state, action) => {
            state.lastname = action.payload;
        },
        genderaction: (state, action) => {
            state.gender = action.payload;
        },
        extraReducers: (builder) => {
            builder.addCase(registerUser.pending, (state) => {
                state.loading = true;
            })
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isRegistered = action.payload.data.isRegistered;
                state.status = action.payload.data.status;

            })
            builder.addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload.data.error;
                state.loading = false;
                state.status = '';
            })
        }
    }
});

export default authorSlice.reducer;
export const { fnameaction, lnameaction, genderaction } = authorSlice.actions;
