import { createSlice } from '@reduxjs/toolkit';
import { ordered } from '../cake/cakeSlice';

const initialState = {
    numberOfIcedCream: 20
}
const icedCreamSlice = createSlice({
    name: 'icedCream',
    initialState,
    reducers: {
        orderIcedCream: (state) => {
            state.numberOfIcedCream--
        },
        restockIcedCream: (state, action) => {
            state.numberOfIcedCream += action.payload
        },
        extraReducers: (builder) => {
            builder.addCase( ordered, (state) => state.numberOfIcedCream--)
        }
    }
});
export default icedCreamSlice.reducer;
export const { orderIcedCream, restockIcedCream } = icedCreamSlice.actions;