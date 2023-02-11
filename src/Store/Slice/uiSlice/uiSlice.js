import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showFoodPopUp:false,
    showRestrantPopUp:false,
    showUserMenu:false,
    showLoginPopUp:false
}

const uiSlice=createSlice({
    name:'ui',
    initialState,
    reducers:{
        popUpHandler:(state,action)=>{
            if(action.payload==='restrant'){
                state.showRestrantPopUp=!state.showRestrantPopUp;
                if(state.showRestrantPopUp){
                    document.body.style.overflow='hidden'
                }else{
                    document.body.style.overflow='auto'
                }
            }
            if(action.payload==='food'){
                state.showFoodPopUp=!state.showFoodPopUp;
                if(state.showFoodPopUp){
                    document.body.style.overflow='hidden'
                }else{
                    document.body.style.overflow='auto'
                }
            }
            if(action.payload==='logIn'){
                state.showLoginPopUp=!state.showLoginPopUp;
                if(state.showLoginPopUp){
                    document.body.style.overflow='hidden'
                }else{
                    document.body.style.overflow='auto'
                }
            }
        },
        userMenuHandler:(state)=>{
            state.showUserMenu=!state.showUserMenu;
        }
    }
})


export const uiSliceAction=uiSlice.actions;
export default uiSlice.reducer;