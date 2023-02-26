import React, { useRef } from 'react';
import style from './logoAndMenu.module.scss';
import MenuList from './MenuList';
import RestrantParticulars from './RestrantParticulars';
const LogoAndMenu = () => {
    const containerEl=useRef()
   
  
        
  
   


    return (
        <div ref={containerEl} className={style.container}>
            <RestrantParticulars/>
            <MenuList/>
        </div>
    );
};

export default LogoAndMenu;