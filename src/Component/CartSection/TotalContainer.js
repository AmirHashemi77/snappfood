import React from 'react';
import style from './totalContainer.module.scss'
const TotalContainer = () => {
    return (
        <div className={style.container}>
            <div className={style.bill}>
                <div className={style.billItem}>
                    <p className={style.title}>مجموع</p>
                    <p className={style.price}>۳۴۰۰۰۰<span>تومان</span></p>
                </div>
                <div className={style.billItem}>
                    <p className={style.title}>مالیات</p>
                    <p className={style.price}>۳۴۰۰۰۰<span>تومان</span></p>
                </div>

            </div>
            <div className={style.total}>
                <p className={style.totalTitle}>قابل پرداخت</p>
                <p className={style.totalPrice}>۳۴۰۰۰۰<span>تومان</span></p>
            </div>
        </div>
    );
};

export default TotalContainer;