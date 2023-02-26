import { restrantSliceAction } from "../Slice/restrantSlice/restrantSlice";
import { uiSliceAction } from '../Slice/uiSlice/uiSlice';



export const fetchRestrantListData=(category,subcatgory)=>{
    return async(dispatch)=>{

        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?type=${category}`)
            dispatch(uiSliceAction.loadingHandler(true))
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data=await response.json();

            
            dispatch(restrantSliceAction.restrantListHandler(data))
            setTimeout(()=>{
                dispatch(uiSliceAction.loadingHandler(false))
            },3000)



        }catch(err){
                console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(false))

        }
    }
}