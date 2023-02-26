import { restrantSliceAction } from "../Slice/restrantSlice/restrantSlice"
import { uiSliceAction } from '../Slice/uiSlice/uiSlice';


export const fetchCurrentRestrant=(id)=>{
    return async(dispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?id=${id}`)
            dispatch(uiSliceAction.loadingHandler(true))

            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data=await response.json()
            
            if(data.length>0){
                dispatch(restrantSliceAction.currentRestrantHandler(data))
            }else{
                
            }
            
           
            setTimeout(()=>{
                dispatch(uiSliceAction.loadingHandler(false))
            },3000)
        }catch(err){
            console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(false))
        }
    }
}