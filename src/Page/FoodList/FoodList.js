import React from 'react';
import style from './foodList.module.scss';
import Header from '../../Component/Header/Header';
import LogoAndMenu from '../../Component/LogoAndMenuFoodList/LogoAndMenu';
import FoodListContainer from '../../Component/FoodList/FoodListContainer';

const FoodList = () => {
    return (
        <>
          <Header/>
          <div className={style.container}>
            <p className={style.breadCrumb}>محل درج برید کرامب</p>
            <div className={style.main}>
                <div className={style.flexContainer}>
                        <LogoAndMenu/> 
                        <FoodListContainer/> 
                </div>


            </div>

          </div>
        </>
    );
};

export default FoodList;