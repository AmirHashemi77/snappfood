import React from 'react';
import style from './sideBarItemWrapper.module.scss'


const SideBarItemWrapper = ({children}) => {
    return (
        
            <div className={style.wrapper}>
                {children}
                
            </div>
        
    );
};

export default SideBarItemWrapper;