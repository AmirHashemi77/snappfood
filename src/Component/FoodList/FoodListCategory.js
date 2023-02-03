import React from 'react';
import FoodItem from './FoodItem';
import style from './foodListCategory.module.scss'
const FoodListCategory = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p>پر طرفدارها</p>
            </div>
            <div className={style.foodList}>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
                    <FoodItem/>
            </div>
        </div>
    );
};

export default FoodListCategory;