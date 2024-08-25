import React, { useEffect } from 'react';
import style from './foodList.module.scss';
import Header from '../../Component/Header/Header';
import LogoAndMenu from '../../Component/LogoAndMenuFoodList/LogoAndMenu';
import FoodListContainer from '../../Component/FoodList/FoodListContainer';
import Footer from '../../Component/Footer/Footer';
import CartContainer from '../../Component/CartSection/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import RestrantPopUp from '../../Component/RestrantPopUp/RestrantPopUp';
import FoodPopUp from '../../Component/FoodPopUp/FoodPopUp';
import {  useParams } from 'react-router-dom';
import { fetchCurrentRestrant } from '../../Store/action/currentRestrantAction';
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb';
import { fetchCartData } from '../../Store/action/fetchCartData';
import SubmitAlert from '../../Component/SubmitAlert/SubmitAlert';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
const FoodList = () => {

  const showFoodPopUp=useSelector((state)=>state.ui.showFoodPopUp)
  const showRestrantPopUp=useSelector((state)=>state.ui.showRestrantPopUp)
  const showSubmitAlert=useSelector((state)=>state.ui.showSubmitAlert)
  const currentRestrant=useSelector((state)=>state.restrants.currentRestrant)

  const parmas=useParams()
  const dispatch=useDispatch()
 
  useEffect(()=>{
    dispatch(fetchCurrentRestrant(parmas.restrantId))
    dispatch(fetchCartData(parmas.restrantId))
    dispatch(uiSliceAction.inActiveSearchInput());

    
  },[parmas.restrantId,dispatch])
  
    return (
        <>
          <Header/>
          {showSubmitAlert && <SubmitAlert/>}
          {showFoodPopUp && <FoodPopUp/>}
          {showRestrantPopUp && <RestrantPopUp/>}
          <div className={style.container}>
            {currentRestrant.id ?
              <>
                <div className={style.breadCrumbWrapper}>
              <BreadCrumb/>
            </div>
            <div className={style.main}>
                <div className={style.flexContainer}>
                        <div className={style.logoAndFoodList}>
                          <LogoAndMenu/> 
                          <FoodListContainer/> 

                        </div>
                        <CartContainer/>
                </div>


            </div>
              </> :
              <p className={style.noItem}>آیتم مورد نظر یافت نشد</p>
            }
            <Footer/>

          </div>
        </>
    );
};

export default FoodList;