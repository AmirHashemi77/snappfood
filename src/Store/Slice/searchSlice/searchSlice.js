
import { createSlice } from '@reduxjs/toolkit';


const initialState={
    resultArr:[]

}
 

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setResultArr(state,action){
            state.resultArr=action.payload
        }
    }
})


export const searchSliceAction=searchSlice.actions;

export default searchSlice.reducer;