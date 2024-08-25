import React from 'react';
import RestrantDetail from './RestrantDetail';
import style from './restrantPopUp.module.scss';
import Comments from '../Comments/Comments';
import CommentsItem from '../Comments/CommentsItem';
import RateSection from './RateSection';
const RestrantPopUp = () => {
            
    return (
        <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
                <RestrantDetail/>
                <div className={style.wrap}>
                    <RateSection/>
                    <Comments>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                    </Comments>

                </div>
        </div>
        </>
    );
};

export default RestrantPopUp;