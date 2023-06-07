
import { createSlice } from '@reduxjs/toolkit';
const initialState={
    restrantListArr:[],
    currentRestrant:{},
    currentFood:{}


}
    
const restrantSlice=createSlice({
    name:'restrants',
    initialState,
    reducers:{
        restrantListHandler(state,action){
            
            state.restrantListArr=[...action.payload]
        },
        currentRestrantHandler(state,action){
        
            state.currentRestrant=action.payload[0]
        },
        currentFoodHandler(state,action){
 
            state.currentFood=action.payload
        }

    }
})


export const restrantSliceAction=restrantSlice.actions;
export default restrantSlice.reducer;