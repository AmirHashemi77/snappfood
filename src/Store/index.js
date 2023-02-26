import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice/authSlice";
import cartSlice from "./Slice/cartSlice/cartSlice";
import restrantSlice from "./Slice/restrantSlice/restrantSlice";
import searchSlice from "./Slice/searchSlice/searchSlice";
import uiSlice from "./Slice/uiSlice/uiSlice";



const store=configureStore({

    reducer:{
        ui:uiSlice,
        auth:authSlice,
        restrants:restrantSlice,
        cart:cartSlice,
        search:searchSlice
    }
})


export default store;