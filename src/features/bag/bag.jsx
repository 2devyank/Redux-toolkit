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
        state.totalcart.push(bagItem[0]);
      } ,
      removeItem:(state,{payload})=>{
       state.totalcart=state.totalcart.filter((item)=>item.id!==payload.id);
      } 
    }
})
export const {addtocart,removeItem}=bagSlice.actions
export default bagSlice.reducer;