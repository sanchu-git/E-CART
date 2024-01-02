import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
const cartStore = configureStore({
    reducer:{
        productSlice
    }
})

export default cartStore