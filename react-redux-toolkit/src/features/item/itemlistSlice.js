import { createSlice } from '@reduxjs/toolkit';
import { fetchlistItems } from './ItemlistService';

const initialState = {
    items: [],
    loading: false,
    status: '',
    error: ''
}

const itemlistSlice = createSlice({
    name: 'itemlist',
    initialState,

    extraReducers: (builder) => {
        
            builder.addCase(fetchlistItems.pending, (state) => {
                state.loading = true;
                state.items = [];
                state.status = "pending";
                state.error = '';
            })
            builder.addCase(fetchlistItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items;
                state.status = "fulfilled";
                state.error = '';
            })
            builder.addCase(fetchlistItems.rejected, (state, action) => {
                state.loading = false;
                state.items = [];
                state.status = "rejected";
                state.error = action.payload;
            });
    }

    // extraReducers: (builder) => {
    //     builder.addCase(fetchlistItems.pending, (state) => {
    //         state.loading = true;
    //         state.items = [];
    //         state.status = "pending";
    //     })

    //     builder.addCase(fetchlistItems.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.items = action.payload.items;
    //         state.status = "fulfilled";
    //     })

    //     builder.addCase(fetchlistItems.rejected, (state, action) => {   
    //         state.loading = false;
    //         state.items = [];
    //         state.status = "rejected";

    //     })
    // }
});

export default itemlistSlice.reducer;
