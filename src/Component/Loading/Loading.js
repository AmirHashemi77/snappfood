import React from 'react';
import style from './loading.module.scss'
const Loading = () => {
    return (
        <div className={style.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;