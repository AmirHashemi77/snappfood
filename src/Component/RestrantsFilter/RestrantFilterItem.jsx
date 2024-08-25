import React from 'react';
import style from './restrantFilterItem.module.scss';
const RestrantFilterItem = ({title}) => {
    return (
        <div>
             <div className={style.container}>
            <label className={style.title}>{title}</label>
            <input type="checkbox"  className={style.checkboxInp}/>
        </div>
        </div>
    );
};

export default RestrantFilterItem;