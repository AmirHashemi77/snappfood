import React from 'react';
import style from './logoAndMenu.module.scss';
import MenuList from './MenuList';
import RestrantParticulars from './RestrantParticulars';
const LogoAndMenu = () => {
    
   

    return (
        <div className={style.container}>
            <RestrantParticulars/>
            <MenuList/>
        </div>
    );
};

export default LogoAndMenu;