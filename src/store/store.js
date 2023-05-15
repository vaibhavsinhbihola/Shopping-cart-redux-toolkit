import { configureStore } from '@reduxjs/toolkit'
import cartRedcuer from './cartSlice'
import productReducer from './productSlice'

export const store = configureStore({
    reducer: {
        cart: cartRedcuer,
        product: productReducer,
    },
})