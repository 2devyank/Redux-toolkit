import { createSlice } from "@reduxjs/toolkit"
import bagItems from "../../data/data";



const initialState={
    amount:0,
    total:0,
    bagitem:bagItems,
    totalcart:[]
}

const  bagSlice=createSlice({
    name:'bag',
    initialState,
    reducers:{
      addtocart:(state,{payload})=>{
        const bagItem=state.bagitem.filter((item)=>item.id===payload.id);
        state.totalcart.push(bagItem);
      }  
    }
})
export const {addtocart}=bagSlice.actions
export default bagSlice.reducer;