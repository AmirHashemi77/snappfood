import React from 'react';
import style from './menuList.module.scss'
const MenuList = () => {
    return (
        <ul className={style.container}>
            <li className={`${style.menuItem} ${style.active}`}>پرطرفدار ها</li>
            <li className={style.menuItem}>پیتزا</li>
            <li className={style.menuItem}>پیتزا جامبو</li>
            <li className={style.menuItem}>پیتزا سیسیلی</li>
            <li className={style.menuItem}>ساندویچ</li>
            <li className={style.menuItem}>سوخاری</li>
            <li className={style.menuItem}>سالاد و پیش غذا</li>
            
            
        </ul>
    );
};

export default MenuList;