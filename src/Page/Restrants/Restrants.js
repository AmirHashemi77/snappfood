import React from 'react';
import style from './restrants.module.scss';
import CategoryList from '../../Component/Header/CategoryList';
import Header from '../../Component/Header/Header';
import RestrantListSideBar from '../../Component/RestrantListSideBar/RestrantListSideBar';
import RestrantList from '../../Component/RestrantList/RestrantList';
import RestrantCart from '../../Component/RestrantSlider/RestrantCart';
import Footer from '../../Component/Footer/Footer';
import RestrantSort from '../../Component/RestrantsSortSection/RestrantSort';
import RestrantFilter from '../../Component/RestrantsFilter/RestrantFilter';
import RestrantPriceFilter from '../../Component/RestrantPriceFilter/RestrantPriceFilter';


const Restrants = () => {
    console.log(window.innerWidth);
    return (
        <>
            <Header/>
            <CategoryList/>
            <p className={style.breadCrump}>محل درج برید کرامپ</p>

            <div className={style.main}>
                <RestrantSort/>
                <div className={style.flexContainer}>
                        <div className={style.sideBar}>
                            
                            <RestrantListSideBar/>
                            <div className={style.priceFilter}><RestrantPriceFilter/></div>
                            <RestrantFilter/>
                        </div>
                        <RestrantList>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                            <RestrantCart/>
                        </RestrantList>
                </div>
            </div>
            <Footer/>

        </>
       
    );
};

export default Restrants;