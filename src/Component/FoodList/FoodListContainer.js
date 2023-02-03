import React from 'react';
import FoodListCategory from './FoodListCategory';
import style from './foodListContainer.module.scss';
const FoodListContainer = () => {
    return (
        <div className={style.container}>
            <FoodListCategory/>
        </div>
    );
};

export default FoodListContainer;