import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './searchInput.module.scss';
import { fetchSearchResultAction } from '../../Store/action/fetchSearchResultAction';
const SearchInput = () => {
    const [timer,setTimer]=useState()
    const dispatch=useDispatch()
    const searchHandler=(e)=>{
       
        clearTimeout(timer)

        const newTimer=setTimeout(()=>{
            if(e.target.value && e.target.value.length>=3){
                dispatch(fetchSearchResultAction(e.target.value))
            }
        },1000)
        setTimer(newTimer)
    }

    return (
        <input type="text" id='search' onChange={searchHandler} className={style.searchInput} autoFocus/>

    );
};

export default SearchInput;