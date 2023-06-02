import { createSlice } from "@reduxjs/toolkit";
const initialState={
    authed:false,
    authedUserData:{},
    stepName:'phoneNumber',
    hasUser:null,
    registeredUser:{},
    notRegisterPhone:null
    


}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
            authedHandler(state,action){
                state.authed=action.payload
            },
            authedUserDataHandler(state,action){
                state.authedUserData=action.payload;
            },
            registeredUserHandler(state,action){
                state.registeredUser=action.payload;
            },
            changeStep(state,action){
                state.stepName=action.payload;
            },
            hasUserHandler(state,action){
                state.hasUser=action.payload;
            },
            notRegisterPhoneHandler(state,action){
                state.notRegisterPhone=action.payload
            },
            clearData(state){
                state.notRegisterPhone=null;
                state.registeredUser=[];
                state.stepName='phoneNumber'
                state.hasUser=null
            },
            deepClearData(state){
                state.notRegisterPhone=null;
                state.registeredUser=[];
                state.stepName='phoneNumber'
                state.hasUser=null
                state.authedUserData={}
                
            }
    }
})


export const authSliceAction=authSlice.actions;
export default authSlice.reducer;