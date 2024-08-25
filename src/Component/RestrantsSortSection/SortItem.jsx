import React from 'react';
import { Link } from 'react-router-dom';
import style from './sortItem.module.scss'
const SortItem = ({title,setSortingValue}) => {
    return (
        <li onClick={()=>setSortingValue(title)} className={style.menuItem}><Link>{title}</Link></li>

    );
};

export default SortItem;