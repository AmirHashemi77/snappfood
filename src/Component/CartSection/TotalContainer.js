import React from 'react';
import style from './totalContainer.module.scss'
import { useSelector } from 'react-redux';
const TotalContainer = () => {
    const totalPrice=useSelector((state)=>state.cart.totalPrice)
    const currentRestrant=useSelector((state)=>state.restrants.currentRestrant)
    return (
        <div className={style.container}>
            <div className={style.bill}>
                <div className={style.billItem}>
                    <p className={style.title}>مجموع</p>
                    <p className={style.price}>{totalPrice}<span>تومان</span></p>
                </div>
                {
                    currentRestrant.sendDetail &&
                    <div className={style.billItem}>
                    <p className={style.title}>هزینه ارسال</p>
                    <p className={style.price}>{currentRestrant.sendDetail.price}<span>تومان</span></p>
                </div>
                }
                <div className={style.billItem}>
                    <p className={style.title}>مالیات</p>
                    <p className={style.price}>10000<span>تومان</span></p>
                </div>

            </div>
           {
            currentRestrant.sendDetail &&
            <div className={style.total}>
                <p className={style.totalTitle}>قابل پرداخت</p>
                <p className={style.totalPrice}>{totalPrice + 10000 +currentRestrant.sendDetail.price}<span>تومان</span></p>
            </div>
            }
        </div>
    );
};

export default TotalContainer;