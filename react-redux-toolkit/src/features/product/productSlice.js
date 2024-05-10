import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addToCartRequest = createAsyncThunk('product/addToCartRequest', async (productId) => {
    return await axios.post("https://localhost:5001/api/cart", productId)
    .then((res) => res)
});

export const buyNowRequest = createAsyncThunk('product/buyNowRequest', async (itemId) => {
    return await axios.post("https://localhost:5001/api/checkout", itemId)
    .then((val) => val)
});



const initialState = {
    product: {},
    addToCart: {
        postToServer: {
            prodId: '',
            userId: '',
            guestIp: ''
        },
        loading: null,
        addToCartSuccess: {
            message: '',
            isAddedToCart: null,
            productCount: 0,
        },
        addToCartFailure: ''
    },
    buyNow: {
        postToServer: {
            prodId: '',
            userId: '',
            numberOfSelectedItem: 0,
        },
        loading: null,
        buyNowSuccess: {
            message: '',
            isSuccessful: null
        },
        buyNowFailure: ''
    }
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        productData: (state, action) => {
            state.product = action.payload
        },
        prodId: (state, action) => {
            state.addToCart.prodId = action.payload
        },
        itemId: (state, action) => {
            state.addToCart.itemId = action.payload
        },
        selectedItem: (state, action) => {
            state.buyNow.numberOfSelectedItem += action.payload;
        }
    },
    extraReducers: (builder) => {
        // FIRST API REQUEST
        builder.addCase(addToCartRequest.pending, (state) => {
            state.addToCart.loading = true
        })
        builder.addCase(addToCartRequest.fulfilled, (state, action) => {
            state.addToCart.loading = false
            state.addToCart.addToCartSuccess.message = action.payload
            state.addToCart.addToCartSuccess.isAddedToCart = action.payload
            state.addToCart.addToCartSuccess.productCount = action.payload
            state.addToCart.addToCartFailure = ''
        })
        builder.addCase(addToCartRequest.rejected, (state, action) => {
            state.loading = false
            state.addToCart.addToCartSuccess = {
                message: '',
                isAddedToCart: null
            }
            state.addToCart.addToCartFailure = action.payload
        })
        
        // SECOND API REQUEST
        builder.addCase(buyNowRequest.pending, (state) => {
            state.buyNow.loading = true
        })
        builder.addCase(buyNowRequest.fulfilled, (state, action) => {
            state.buyNow.loading = false
            state.buyNow.buyNowSuccess.message = action.payload
            state.buyNow.buyNowSuccess.isSuccessful = action.payload
            state.buyNow.buyNowFailure = ''
        })
        builder.addCase(buyNowRequest.rejected, (state, action) => {
            state.loading = false
            state.buyNow.buyNowSuccess = {
                message: '',
                isSuccessful: null
            }
            state.buyNow.buyNowFailure = action.payload
        })
    }
});

export default productSlice.reducer;
export const { productData, prodId, itemId, selectedItem } = productSlice.actions;