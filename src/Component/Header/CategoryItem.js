import React from 'react';
import { Link } from 'react-router-dom';
import style from './categoryItem.module.scss'
const CategoryItem = ({categoryName,title}) => {
    return (
        <li>
            <Link className={style.categoryItem} to={`/service/${categoryName}`} >
                <img src={`/images/category-icon/${categoryName}.png`} alt={categoryName} />
                <p>{title}</p>
            </Link>
         </li>
    );
};

export default CategoryItem;