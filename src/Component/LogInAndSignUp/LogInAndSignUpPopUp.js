import React from 'react';
import LogIn from './LogIn';
import style from './logInAndSignUpPopUp.module.scss'
// import PassWordLogIn from './PasswordLogIn';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import { useDispatch } from 'react-redux';
const LogInAndSignUpPopUp = () => {
    const dispatch=useDispatch()
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }
    return (
        <>
        <div onClick={showLoginPopUp} className={style.backDrop}></div>
            <div className={style.container}>
                <LogIn/>
                {/* <PassWordLogIn/> */}
            </div>
        </>
    );
};

export default LogInAndSignUpPopUp;