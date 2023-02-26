import React from 'react';
import { Link } from 'react-router-dom';
import style from './userMenu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authSliceAction } from '../../Store/Slice/authSlice/authSlice';
const UserMenu = () => {
    const dispatch=useDispatch();
    const userData=useSelector((state)=>state.auth.authedUserData)
    const logOutUser=()=>{
        dispatch(authSliceAction.authedHandler(false))
        dispatch(authSliceAction.deepClearData())
    }
    return (
        <div className={style.container}>
            <Link className={style.user}>
                <div className={style.userName}>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="#3A3D42"><path fillRule="evenodd" clipRule="evenodd" d="M9.49992 10.666C11.8011 10.666 13.6666 12.5315 13.6666 14.8327V16.4993C13.6666 16.9596 13.2935 17.3327 12.8333 17.3327C12.373 17.3327 11.9999 16.9596 11.9999 16.4993V14.8327C11.9999 13.452 10.8806 12.3327 9.49992 12.3327H4.49992C3.11921 12.3327 1.99992 13.452 1.99992 14.8327V16.4993C1.99992 16.9596 1.62682 17.3327 1.16659 17.3327C0.706348 17.3327 0.333252 16.9596 0.333252 16.4993V14.8327C0.333252 12.5315 2.19873 10.666 4.49992 10.666H9.49992ZM6.99992 0.666016C9.3011 0.666016 11.1666 2.5315 11.1666 4.83268C11.1666 7.13387 9.3011 8.99935 6.99992 8.99935C4.69873 8.99935 2.83325 7.13387 2.83325 4.83268C2.83325 2.5315 4.69873 0.666016 6.99992 0.666016ZM6.99992 2.33268C5.61921 2.33268 4.49992 3.45197 4.49992 4.83268C4.49992 6.21339 5.61921 7.33268 6.99992 7.33268C8.38063 7.33268 9.49992 6.21339 9.49992 4.83268C9.49992 3.45197 8.38063 2.33268 6.99992 2.33268Z"></path></svg>
                    <p>{userData.name}</p>

                </div>
                <small>مشاهده حساب کاربری</small>

            </Link>
            <button className={style.bag}>
                <div className={style.title}>
                    <svg width="1.0625rem" height="1rem" viewBox="0 0 17 16" fill="#676A70" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M13.8333 0.500977C14.75 0.500977 15.5 1.25098 15.5 2.16764V4.06764C15.9917 4.35931 16.3333 4.88431 16.3333 5.50098V10.501C16.3333 11.1176 15.9917 11.6426 15.5 11.9343V13.8343C15.5 14.751 14.75 15.501 13.8333 15.501L2.16667 15.501C1.24167 15.501 0.5 14.751 0.5 13.8343L0.5 2.16764C0.5 1.25098 1.24167 0.500977 2.16667 0.500977L13.8333 0.500977ZM13.8333 2.16764L2.16667 2.16764L2.16667 13.8343L13.8333 13.8343V12.1676H8.83333C7.91667 12.1676 7.16667 11.4176 7.16667 10.501L7.16667 5.50098C7.16667 4.58431 7.91667 3.83431 8.83333 3.83431L13.8333 3.83431V2.16764ZM14.6667 5.50098L8.83333 5.50098L8.83333 10.501H14.6667L14.6667 5.50098ZM11.3333 6.75098C12.0237 6.75098 12.5833 7.31062 12.5833 8.00098C12.5833 8.69133 12.0237 9.25098 11.3333 9.25098C10.643 9.25098 10.0833 8.69133 10.0833 8.00098C10.0833 7.31062 10.643 6.75098 11.3333 6.75098Z"></path></svg>
                    <p className={style.text}>کیف پول</p>
                </div>
               
                    <p className={style.cash}>
                        <span>۰</span>تومان
                    </p>
                
            </button>
            <button className={style.invite}>
            <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" width="20" height="20" viewBox="0 0 20 20"><path fill="#676A70" d="M18.5 5h-3.001c0.315-0.418 0.501-0.938 0.501-1.5 0-1.378-1.122-2.5-2.5-2.5-1.39 0-2.556 1.101-3.127 1.758-0.346 0.397-0.644 0.823-0.873 1.235-0.229-0.412-0.527-0.837-0.873-1.235-0.571-0.656-1.737-1.758-3.127-1.758-1.378 0-2.5 1.122-2.5 2.5 0 0.562 0.187 1.082 0.501 1.5h-3.001c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276 0.224 0.5 0.5 0.5h0.5v9.5c0 0.827 0.673 1.5 1.5 1.5h14c0.827 0 1.5-0.673 1.5-1.5v-9.5h0.5c0.276 0 0.5-0.224 0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5zM11.127 3.414c0.782-0.899 1.647-1.414 2.373-1.414 0.827 0 1.5 0.673 1.5 1.5s-0.673 1.5-1.5 1.5h-3.378c0.173-0.442 0.523-1.032 1.005-1.586zM11 19h-3v-13h3v13zM4 3.5c0-0.827 0.673-1.5 1.5-1.5 0.726 0 1.591 0.515 2.373 1.414 0.482 0.554 0.832 1.144 1.005 1.586h-3.378c-0.827 0-1.5-0.673-1.5-1.5zM1 6h6v2h-6v-2zM2 18.5v-9.5h5v10h-4.5c-0.276 0-0.5-0.224-0.5-0.5zM17 18.5c0 0.276-0.224 0.5-0.5 0.5h-4.5v-10h5v9.5zM18 8h-6v-2h6v2z"/></svg>
                <p className={style.text}>دعوت از دوستان</p>
            </button>
            <button onClick={logOutUser} className={style.exit}>
                <svg width="1.125rem" height="1.125rem" viewBox="0 0 18 18" fill="#676A70" xmlns="http://www.w3.org/2000/svg"><path d="M7 16C7.55228 16 8 16.4477 8 17C8 17.5523 7.55228 18 7 18H3C1.34315 18 0 16.6569 0 15L0 3C0 1.34315 1.34315 0 3 0L7 0C7.55228 0 8 0.447715 8 1C8 1.55228 7.55228 2 7 2L3 2C2.44772 2 2 2.44772 2 3L2 15C2 15.5523 2.44772 16 3 16L7 16ZM14.5858 8L11.2929 4.70711C10.9024 4.31658 10.9024 3.68342 11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071C10.9024 14.3166 10.9024 13.6834 11.2929 13.2929L14.5858 10H6C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8L14.5858 8Z"></path></svg>
                <p  className={style.text}>خروج</p>
            </button>
        </div>
    );
};

export default UserMenu;