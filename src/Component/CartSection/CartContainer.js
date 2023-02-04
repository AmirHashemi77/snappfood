import React, { useRef } from 'react';
import Cart from './Cart';
import style from './cartContainer.module.scss'
import SendingType from './SendingType';
import SendTime from './SendTime';
const CartContainer = () => {
    const cartContainer=useRef()
    window.onwheel=(e)=>{
       if(e.deltaY>0){
           cartContainer.current.scrollBy(0,cartContainer.current.offsetHeight)
    }else{
        cartContainer.current.scrollBy(0,-cartContainer.current.offsetHeight)
       }
    
    }
    return (
        <div ref={cartContainer} className={style.container}>
            <SendTime/>
            <SendingType/>
            <Cart/>
        </div>
    );
};

export default CartContainer;