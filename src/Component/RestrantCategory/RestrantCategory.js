import React from 'react';
import style from './restrantCategory.module.scss'
import RestrantCategoryItem from './RestrantCategoryItem';
import { restrantCategoryData } from '../../utils/restrantCtegoryData';
const RestrantCategory = () => {
    return (
        

        <div className={style.container}>
            
                <h5 className={style.title}>دسته بندی ها</h5>
                <div className={style.itemWrapper}>
                    {restrantCategoryData.map((item)=>{
                    return    <RestrantCategoryItem key={item.name} name={item.name} title={item.title}/>

                    })}

                 
                  
                </div>

           
            
        </div>
        
    );
};

export default RestrantCategory;