import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice/authSlice";
import uiSlice from "./Slice/uiSlice/uiSlice";



const store=configureStore({

    reducer:{
        ui:uiSlice,
        auth:authSlice
    }
})


export default store;