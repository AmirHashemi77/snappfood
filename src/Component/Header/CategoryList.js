import React from 'react';
import CategoryItem from './CategoryItem.js';
import style from './categoryList.module.scss'
const CategoryList = () => {
    return (
        <ul className={style.categoryList}>
                    <CategoryItem categoryName='restrant' title='رستوران'/>
                    <CategoryItem categoryName='supermarket' title='سوپرمارکت'/>
                    <CategoryItem categoryName='cofe' title='کافه'/>
                    <CategoryItem categoryName='sweet' title='شیرینی'/>
                    <CategoryItem categoryName='bakery' title='نانوایی'/>
                    <CategoryItem categoryName='fruit' title='میوه'/>
                    <CategoryItem categoryName='meat' title='گوشت'/>
                    <CategoryItem categoryName='icecream' title='بستنی'/>
                    <CategoryItem categoryName='nut' title='آجیل'/>
                    <CategoryItem categoryName='other' title='دیگر'/>
                </ul>
    );
};

export default CategoryList;