import React from 'react';
import style from './foodItem.module.scss'
const FoodItem = () => {
    return (
        <div className={style.container}>
            <div className={style.details}>
                <div className={style.description}>
                    <h5 className={style.title}>پتزا پنجره ای</h5>
                    <p className={style.subtitle}>ژامبون گوشت، سوسیس، قارچ، فلفل دلمه ای، سس و پنیر مخصوص پرپروک</p>
                </div>
                <img className={style.foodPic} src="/images/test3.jpeg" alt="pic" />
            </div>
            <div className={style.priceAndBtn}>
                <p className={style.price}>
                             ۱۷۰،۰۰۰ <span>تومان</span>
                </p>
                <button className={style.addBtn}>افزودن</button>
            </div>

        </div>
    );
};

export default FoodItem;