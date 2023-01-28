import React from 'react';
import AppBanner from '../../Component/Banners/AppBanner';
import SignInBanner from '../../Component/Banners/SignInBanner';
import CitySection from '../../Component/CitySection/CitySection';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import RestrantCategory from '../../Component/RestrantCategory/RestrantCategory';
import RestrantCart from '../../Component/RestrantSlider/RestrantCart';
import Slider from '../../Component/RestrantSlider/Slider';
import style from './home.module.scss'
const Home = () => {
    return (
        <>
            <Header/>
            
            <div className={style.main}>
                <RestrantCategory/>
                <Slider title='برترین ها'>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                </Slider>
                <Slider title='یک تجربه جدید'>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                </Slider>
                <Slider title='دارای تخفیف'>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                    <RestrantCart/>
                </Slider>
                <AppBanner/>
                <SignInBanner/>
                
            </div>
            <CitySection/>
            <Footer/>
        </>
    );
};

export default Home;