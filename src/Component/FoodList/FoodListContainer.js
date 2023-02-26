import React from 'react';
import FoodListCategory from './FoodListCategory';
import style from './foodListContainer.module.scss';
import { useSelector } from 'react-redux';
const FoodListContainer = () => {
    const currentRestrant=useSelector((state)=>state.restrants.currentRestrant)
    

    
    return (
        <div className={style.container}>
            {
                currentRestrant.menu &&
                currentRestrant.menu.map((item)=>(
                    <FoodListCategory  key={item.id} id={item.id} title={item.category} foods={item.foods} />

                ))
            }
        </div>
    );
};

export default FoodListContainer;