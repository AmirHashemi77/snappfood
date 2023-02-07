import React from 'react';
import Comments from '../Comments/Comments';
import CommentsItem from '../Comments/CommentsItem';
import FoodDetail from './FoodDetail';
import style from './foodPopUp.module.scss';
const FoodPopUp = () => {
    return (
        <div className={style.backDrop}>
            <div className={style.container}>
                <FoodDetail/>
                <Comments>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                </Comments>
            </div>

        </div>
    );
};

export default FoodPopUp;