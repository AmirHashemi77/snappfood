import React, { useEffect, useRef } from 'react';
import Cart from './Cart';
import style from './cartContainer.module.scss'
import SendingType from './SendingType';
import SendTime from './SendTime';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { useParams } from 'react-router-dom';
import { postCartAction } from '../../Store/action/postCartAction';


const CartContainer = () => {
    const totalQuantity=useSelector((state)=>state.cart.totalQuantity)
    const parmas=useParams()
    const dispatch=useDispatch()
    const cartData=useSelector((state)=>state.cart)
    const cartContainer=useRef()
 
      window.onwheel=(e)=>{
          if(e.deltaY>0 && cartContainer.current){
              cartContainer.current.scrollBy(0,cartContainer.current.offsetHeight)
       }else if(e.deltaY<0 && cartContainer.current){
           cartContainer.current.scrollBy(0,-cartContainer.current.offsetHeight)
          }
       
       

  }

   
    useEffect(()=>{
   
        if(cartData.change){
            dispatch(postCartAction({
               id:parmas.restrantId,
               ...cartData
       
            }))

        }
        
        
            
       
        
        // eslint-disable-next-line
    },[cartData,dispatch])
   
    return (
        <div ref={cartContainer} className={style.container}>
            <SendTime/>
            <SendingType/>
            {
                totalQuantity>0 ? <Cart/> : <EmptyCart/>

            }
            </div>
    );
};

export default CartContainer;