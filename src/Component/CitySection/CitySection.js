import React from 'react';
import style from './citySection.module.scss';
import { city } from '../../utils/city';
import { Link } from 'react-router-dom';
const CitySection = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>اسنپ‌فود در شهرهای ایران</h5>
            <div className={style.cities}>
                    {city.map((item,index)=>{
                    return    <Link key={index} className={style.city}>{item}</Link>
                    })}
            </div>
            
        </div>
    );
};

export default CitySection;