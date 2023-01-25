import React from 'react';
import Header from '../../Component/Header/Header';
import RestrantCategory from '../../Component/RestrantCategory/RestrantCategory';
import style from './home.module.scss'
const Home = () => {
    return (
        <>
            <Header/>
            <div className={style.main}>
                <RestrantCategory/>

            </div>
        </>
    );
};

export default Home;