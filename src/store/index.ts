import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from './OrderSlice';

const store = configureStore({
    reducer: {
        orders: ordersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;