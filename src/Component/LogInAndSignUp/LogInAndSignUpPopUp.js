import React from 'react';
// import LogIn from './LogIn';
import style from './logInAndSignUpPopUp.module.scss'
import PassWordLogIn from './PasswordLogIn';
const LogInAndSignUpPopUp = () => {
    return (
        <div className={style.backDrop}>
            <div className={style.container}>
                {/* <LogIn/> */}
                <PassWordLogIn/>
            </div>
        </div>
    );
};

export default LogInAndSignUpPopUp;