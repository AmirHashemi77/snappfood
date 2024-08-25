import React from 'react';
import style from './cartButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import ButtonLoading from '../Loading/ButtonLoading';
import { deleteCartAction } from '../../Store/action/postCartAction';
import {  useNavigate, useParams } from 'react-router-dom';
const CartButton = () => {
    const authed=useSelector((state)=>state.auth.authed)
    const loading=useSelector((state)=>state.ui.showLoading)
    const dispatch=useDispatch()
    const parmas=useParams()
    const navigate=useNavigate()
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }
    const submitHandler=()=>{
        dispatch(uiSliceAction.submitAlertHandler(true))
        setTimeout(()=>{
            dispatch(uiSliceAction.submitAlertHandler(false))
            navigate('/')
        },1000)
        dispatch(deleteCartAction(parmas.restrantId))

        


    }
    
    return (
        <div className={style.container}>
            {
                loading ? <button className={style.btn}><ButtonLoading/></button> :

                (!authed ? <button onClick={showLoginPopUp} className={style.btn}>ورود به حساب کاربری</button> : 
                <button onClick={submitHandler} className={style.btn}>ثبت سفارش</button>)
                
            }
            
        </div>
    );
};

export default CartButton;