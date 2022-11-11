import { configureStore } from "@reduxjs/toolkit";
import bagReducer from "./features/bag/bag.jsx"


export const store=configureStore({
    reducer:{
        bag:bagReducer
    }
})



