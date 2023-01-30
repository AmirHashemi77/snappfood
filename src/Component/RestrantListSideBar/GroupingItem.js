import React from 'react';
import style from './groupingItem.module.scss'
const GroupingItem = () => {
    return (
        <div className={style.container}>
            <div className={style.picAndName}>
                <img src="/images/pitza.png" alt="pizza" />
                <p>فست فود</p>
            </div>
            
        </div>
    );
};

export default GroupingItem;