
import { cartSliceAction } from '../Slice/cartSlice/cartSlice';
export const fetchCartData=(restrantId)=>{
    return async (dispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart?id=${restrantId}`)
            if(!response.ok){
                throw new Error('some thing is wrong')
            }
            const data=await response.json()


            if(data.length>0){
                dispatch(cartSliceAction.replaceToCart({
                    items:data[0].items,
                    totalQuantity:data[0].totalQuantity,
                    totalPrice:data[0].totalPrice,
                }))
            }else{
                dispatch(cartSliceAction.replaceToCart({
                    items:[],
                    totalQuantity:0,
                    totalPrice:0,
                }))

            }
        }catch(err){
            console.log(err.message);
        }
    }
}