import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

const fetchProducts = async () => {
    return await axios.get("/Users/presleyomozuwa/Desktop/server-data/products.json")
    .then((res) => res)
}


const initialState = {
    products: [],
    loading: null,
    productsSuccess: {
        message: '',
        isDone: null
    },
    productsFailure: ''
}