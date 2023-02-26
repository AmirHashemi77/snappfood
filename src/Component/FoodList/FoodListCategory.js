import React from 'react';
import FoodItem from './FoodItem';
import style from './foodListCategory.module.scss'

const FoodListCategory = ({title,foods,id}) => {
    


    

    return (
        <div id={id}  className={style.container}>
            <div className={style.title}>
                <p>{title}</p>
            </div>
            <div className={style.foodList}>
                {foods.map((item)=>(
                    <FoodItem key={item.id} id={item.id}  price={item.price} title={item.name} ingredient={item.ingredient} image={item.img} rate={item.rate} comments={item.comments}/>

                ))}
                    
            </div>
        </div>
    );
};

export default FoodListCategory;