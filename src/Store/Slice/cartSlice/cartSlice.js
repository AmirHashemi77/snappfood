import { createSlice } from '@reduxjs/toolkit';


const initialState={
    items:[],
    totalQuantity:0,
    totalPrice:0,
    change:false,
    



}




const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        replaceToCart(state,action){
            state.items=action.payload.items
            state.totalQuantity=action.payload.totalQuantity
            state.totalPrice=action.payload.totalPrice
        },

        addToCart(state,action){
            const availableItem=state.items.find((item)=>item.id===action.payload.id)
            if(availableItem){
                availableItem.quantity++;
             
                state.totalPrice=state.totalPrice+availableItem.price;
                state.totalQuantity++;
                state.change=true
            }else{
                state.items.push(action.payload);
                state.totalPrice=state.totalPrice + action.payload.price;
                state.totalQuantity++;
                state.change=true

            }

        },
        removeFromCart(state,action){
            const currentItem=state.items.find((item)=>item.id===action.payload)

            if(currentItem.quantity > 1){
                currentItem.quantity--;
                currentItem.totalPrice-=currentItem.price;
                state.totalQuantity--;
                state.totalPrice=state.totalPrice-currentItem.price;
                state.change=true

            }else if(currentItem.quantity===1){
                state.items=state.items.filter((item)=>item.id!==currentItem.id);
                state.totalQuantity--;
                state.totalPrice=state.totalPrice-currentItem.price;
                state.change=true

            }
        },
        clearAll(state){
            state.items=[];
            state.totalQuantity=0;
            state.totalPrice=0;
            state.change=true

        }
       
        
        
        
    }
})


export const cartSliceAction=cartSlice.actions;

export default cartSlice.reducer;