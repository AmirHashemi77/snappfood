
import { authSliceAction } from '../Slice/authSlice/authSlice';


export const signUpAction=(newUser)=>{
    return async(dispatch)=>{
           try{
            const response=await fetch('https://snappfoodapi.amirhashemi776.ir/users',{
                method:'POST',
                body:JSON.stringify(newUser),
                headers:{ 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })
            if(!response.ok){
                throw new Error('some things is wrong');
            }
           
            dispatch(authSliceAction.authedUserDataHandler(newUser));
            dispatch(authSliceAction.authedHandler(true))
            dispatch(authSliceAction.clearData())
           }catch(err){
            console.log(err.message);
           }

    }
}