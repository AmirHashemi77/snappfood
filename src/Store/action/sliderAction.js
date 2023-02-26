
import { uiSliceAction } from '../Slice/uiSlice/uiSlice';

export const fetchSliderData=(setData,tag)=>{
    return async(dispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?tag=${tag}`)
            dispatch(uiSliceAction.loadingHandler(true))
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data= await response.json();
            setData(data)
            dispatch(uiSliceAction.loadingHandler(false))

       }catch(err){
            console.log(err.message);
            dispatch(uiSliceAction.loadingHandler(false))

       }

    }
}