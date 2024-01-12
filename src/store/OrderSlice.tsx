import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import  {AlbumItem} from './../components/Albums';




const orderSlice = createSlice({
    name: 'ordersInCart',
    initialState: {
        orders: [] as AlbumItem[]
    },
    reducers: {
        addToCard(state, action : PayloadAction<AlbumItem>) {
            let isInArray = false;
            state.orders.forEach((el) => {
              if (el.id === action.payload.id) isInArray = true;
            });
        
            if (!isInArray) state.orders = [action.payload, ...state.orders];
        },

        deleteFromCard(state, action : PayloadAction<number>){
            state.orders = state.orders.filter((el) => el.id !== action.payload);
        }
    }
})

export const {addToCard, deleteFromCard} = orderSlice.actions;

export default orderSlice.reducer