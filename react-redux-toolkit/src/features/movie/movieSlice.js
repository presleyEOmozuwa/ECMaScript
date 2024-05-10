import { createSlice } from '@reduxjs/toolkit';
import { fetchMovies } from './MovieService';

const initialState = {
    movies: [],
    loading: false,
    status: null,
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,

    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
            state.movies = [];
            state.status = "pending";
        })

        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.status = "fulfilled";
        })

        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.status = "rejected";
            state.error = action.payload;
        })
    }
});

export default movieSlice.reducer;