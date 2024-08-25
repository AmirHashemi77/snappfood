import React from 'react';
import style from './comments.module.scss';
const Comments = ({children}) => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>نظرات کاربران</h4>
            <div className={style.commentsWrapper}>
                    {children}
            </div>
            
        </div>
    );
};

export default Comments;