import React from 'react';
import style from './foodList.module.scss';
import Header from '../../Component/Header/Header';
import LogoAndMenu from '../../Component/LogoAndMenuFoodList/LogoAndMenu';
import FoodListContainer from '../../Component/FoodList/FoodListContainer';
import Footer from '../../Component/Footer/Footer';
import CartContainer from '../../Component/CartSection/CartContainer';
import { useSelector } from 'react-redux';
import RestrantPopUp from '../../Component/RestrantPopUp/RestrantPopUp';
import FoodPopUp from '../../Component/FoodPopUp/FoodPopUp';
const FoodList = () => {

  const showFoodPopUp=useSelector((state)=>state.ui.showFoodPopUp)
  const showRestrantPopUp=useSelector((state)=>state.ui.showRestrantPopUp)
  
    return (
        <>
          <Header/>
          {showFoodPopUp && <FoodPopUp/>}
          {showRestrantPopUp && <RestrantPopUp/>}
          <div className={style.container}>
            <p className={style.breadCrumb}>محل درج برید کرامب</p>
            <div className={style.main}>
                <div className={style.flexContainer}>
                        <div className={style.logoAndFoodList}>
                          <LogoAndMenu/> 
                          <FoodListContainer/> 

                        </div>
                        <CartContainer/>
                </div>


            </div>
            <Footer/>

          </div>
        </>
    );
};

export default FoodList;