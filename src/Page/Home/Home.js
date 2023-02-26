import React from 'react';
import AppBanner from '../../Component/Banners/AppBanner';
import SignInBanner from '../../Component/Banners/SignInBanner';
import CitySection from '../../Component/CitySection/CitySection';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import RestrantCategory from '../../Component/RestrantCategory/RestrantCategory';
import Slider from '../../Component/RestrantSlider/Slider';
import style from './home.module.scss'
import { useSelector } from 'react-redux';
import Loading from '../../Component/Loading/Loading';
const Home = () => {
    const loading=useSelector((state)=>state.ui.showLoading);
    
    return (
        <>
            <Header/>
           
                {
                    loading &&  <div className={style.loadingWrapper}><Loading/></div>
                }

            
            
            <div className={style.main}>
            {!loading && <RestrantCategory/>}
            <Slider title='برترین ها' tag='top' />
            <Slider title='یک تجربه جدید' tag='newExperience' />
            <Slider title='دارای تخفیف' tag='off'/>
            {loading &&  <AppBanner/>}
            {loading &&  <SignInBanner/>}
           </div>
           
            <CitySection/>
            <Footer/>
        </>
    );
};

export default Home;