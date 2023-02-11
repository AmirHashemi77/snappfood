import { createSlice } from "@reduxjs/toolkit";

const initialState={
    authed:false

}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{

            logInHandler:(state)=>{
                state.authed=true
            },
                    
            logOutHandler:(state)=>{
                state.authed=false
            }
    }
})


export const authSliceAction=authSlice.actions;
export default authSlice.reducer;