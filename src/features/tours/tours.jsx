import { createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:true,
    tourdata:[],
    error:''
}
const tourSlice=createSlice({
    name:'tour',
    initialState,
    extraReducers:{
        
    }
})