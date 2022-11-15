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
      } ,
      increaseitem:(state,{payload})=>{
        const cartitem=state.totalcart.find((item)=>item.id===payload.id)
        cartitem.amount=cartitem.amount+1;
      },
      decreaseitem:(state,{payload})=>{
        const cartitem=state.totalcart.find((item)=>item.id===payload.id)
        cartitem.amount=cartitem.amount-1;
      },
      totalamount:(state)=>{
        let amount=0;
        let total=0;
        state.totalcart.forEach((item)=>{
          amount+=item.amount;
          total+=item.amount*item.price;
        })
        state.amount=amount;
        state.total=total;
      }
    }
})
console.log(bagSlice);
export const {addtocart,removeItem,increaseitem,decreaseitem,totalamount}=bagSlice.actions
export default bagSlice.reducer;