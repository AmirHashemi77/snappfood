import React from 'react';
import style from './foodsCartContainer.module.scss';
import FoodsCartItem from './FoodsCartItem';
import { useSelector } from 'react-redux';
const FoodsCartContainer = () => {
    const cartItems=useSelector((state)=>state.cart.items)
    return (
        <div className={style.container}>
            {
                cartItems.map((item)=>(

                        <FoodsCartItem key={item.id} id={item.id} title={item.title} price={item.price} quantity={item.quantity}/>

                ))
            }
           
        </div>
    );
};

export default FoodsCartContainer;