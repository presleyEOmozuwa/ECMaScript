import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    try{
        const res = await axios.get("http://localhost:5000/api/movies");
        console.log(res.data.movies);
        return res.data.movies;
    
    }catch(err){
        const { error } = err.response.data;
        console.log(error);
        return error;
    }
})