import React from 'react';
import AppBanner from '../../Component/Banners/AppBanner';
import SignInBanner from '../../Component/Banners/SignInBanner';
import Header from '../../Component/Header/Header';
import RestrantCategory from '../../Component/RestrantCategory/RestrantCategory';
import style from './home.module.scss'
const Home = () => {
    return (
        <>
            <Header/>
            <div className={style.main}>
                <RestrantCategory/>
                <AppBanner/>
                <SignInBanner/>

            </div>
        </>
    );
};

export default Home;