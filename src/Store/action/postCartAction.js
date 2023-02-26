
import { uiSliceAction } from '../Slice/uiSlice/uiSlice';



export const postCartAction=(cartData)=>{
    return async(dispatch)=>{
       
        const checkCartIdHandler=async()=>{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart?id=${cartData.id}`)
            if(!response.ok){
                throw new Error('some things is wrong');
            }
            const data=await response.json();

           
         
                return data
           

        }
        const postNewCart=async()=>{
            const response=await fetch('https://snappfoodapi.amirhashemi776.ir/cart',{
                method:'POST',
                body:JSON.stringify({
                    id:cartData.id,
                    items:cartData.items,
                    totalQuantity:cartData.totalQuantity,
                    totalPrice:cartData.totalPrice
                }),
                headers:{ 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })
            if(!response.ok){
                throw new Error('some things is wrong');
            }
        }
        const editCurrentCart=async()=>{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart/${cartData.id}`,{
            method:'PUT',
            body:JSON.stringify({
                    id:cartData.id,
                    items:cartData.items,
                    totalQuantity:cartData.totalQuantity,
                    totalPrice:cartData.totalPrice
            }),
            headers:{ 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
            if(!response.ok){
                throw new Error('some thing is wrong')
            }

        }
        const deleteCart=async()=>{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart/${cartData.id}`,{
                method:'DELETE'
            })
            if(!response.ok){
                throw new Error('some things is wrong');
            }
        }
        try{
            dispatch(uiSliceAction.loadingHandler(true))
            const Data=await checkCartIdHandler();
            
            if(Data.length>0){
              
                await editCurrentCart()
               
            if(cartData.totalQuantity===0 && cartData.change){
                
                await deleteCart()

            }    

            setTimeout(()=>{
                dispatch(uiSliceAction.loadingHandler(false))
            },1000)

           }else{
                    await postNewCart()
                    setTimeout(()=>{
                        dispatch(uiSliceAction.loadingHandler(false))
                    },1000)
    

                
           }

        }catch(err){
            console.log(err.message);
        }
      
            
       
        
       
      
    }
}



export const deleteCartAction=(restrantId)=>{
    return async()=>{
        const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart/${restrantId}`,{
            method:'DELETE'
        })
        if(!response.ok){
            throw new Error('some things is wrong');
        }
    }
}
