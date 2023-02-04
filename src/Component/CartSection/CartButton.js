import React from 'react';
import style from './cartButton.module.scss';
const CartButton = () => {
    return (
        <div className={style.container}>
            <button className={style.btn}>
                ورود به حساب کاربری
            </button>
        </div>
    );
};

export default CartButton;