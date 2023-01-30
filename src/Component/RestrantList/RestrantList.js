import React from 'react';
import style from './restrantList.module.scss'
const RestrantList = ({children}) => {
    return (
        <div className={style.container}>
            
                {children}
            
        </div>
    );
};

export default RestrantList;