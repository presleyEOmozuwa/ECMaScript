import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('author/registerUser', async (url, payload) => {
    try {
        const res = await axios.post(url, payload);
        console.log(res.data);
        return res.data;

    }
    catch (err) {
        const { success, error } = res.response.data;
        console.log(success);
        console.log(error);
        return err.response.data;
    }
});
