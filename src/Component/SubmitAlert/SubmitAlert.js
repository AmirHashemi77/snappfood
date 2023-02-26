import React from 'react';
import style from './submitAlert.module.scss';
const SubmitAlert = () => {
    return (
        <>
            <div className={style.backDrop}></div>
            <div className={style.container}>
                <p className={style.text}>سفارش شما با موفقیت ثبت شد</p>
            </div>
        </>
    );
};

export default SubmitAlert;