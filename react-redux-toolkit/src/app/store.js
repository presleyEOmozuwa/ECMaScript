import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import icedCreamReducer from '../features/icedcream/icedCreamSlice';
import userReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';
import authorReducer from '../features/author/authorSlice';
import itemlistReducer from '../features/item/itemlistSlice';
import movieReducer from '../features/movie/movieSlice';

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icedCream: icedCreamReducer,
        user: userReducer,
        product: productReducer,
        author: authorReducer,
        itemlist: itemlistReducer,
        movie: movieReducer
    }
});

export default store;


