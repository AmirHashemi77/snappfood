
import { searchSliceAction } from '../Slice/searchSlice/searchSlice';




export const fetchSearchResultAction=(input)=>{
    return async(dispatch)=>{
       try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?title_like=${input}`)
           
            
            
            if(!response.ok){
                throw new Error('some things is wrong')
            }

            const data=await response.json()
            
            dispatch(searchSliceAction.setResultArr(data))

       }catch(err){
        console.log(err.message);
       }

    }
}