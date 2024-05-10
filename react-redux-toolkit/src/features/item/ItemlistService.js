import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const fetchlistItems = createAsyncThunk('itemlist/fetchlistItems', async ({ rejectWithValue }) => {
    try{
        const res = await axios.get("http://localhost:5000/api/items");
        console.log(res.data);
        return res.data;
    
    }catch(err){
        const { error } = err.response.data;
        console.log(error);
        return rejectWithValue(error);
    }
});

export const itemlistApi = createApi({
    reducerPath: "itemlistApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5000/api/"}),
    endpoints: (builder) => {
        return {
            getAllItems: builder.query({
                query: () => "items"
            })
        }
    }
});

export const { useGetAllItemsQuery } = itemlistApi;

