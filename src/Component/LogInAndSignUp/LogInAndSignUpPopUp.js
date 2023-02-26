import React from 'react';
import LogIn from './LogIn';
import style from './logInAndSignUpPopUp.module.scss'
import PassWordLogIn from './PasswordLogIn';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import { useDispatch, useSelector } from 'react-redux';
import SignUp from './SignUp';
const LogInAndSignUpPopUp = () => {
    const dispatch=useDispatch()
    const step=useSelector((state)=>state.auth.stepName)
    const hasUser=useSelector((state)=>state.auth.hasUser);
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }
    return (
        <>
        <div onClick={showLoginPopUp} className={style.backDrop}></div>
            <div className={style.container}>
                {step==='phoneNumber' && <LogIn/>}
                {step==='password' && hasUser && <PassWordLogIn/>}
                {step==='signup' && !hasUser && <SignUp/>}

            </div>
        </>
    );
};

export default LogInAndSignUpPopUp;