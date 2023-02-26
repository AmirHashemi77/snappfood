import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './resultSearch.module.scss'
import { searchSliceAction } from '../../Store/Slice/searchSlice/searchSlice';
const ResultSearch = () => {
    const resultArr=useSelector((state)=>state.search.resultArr)
    const dispatch=useDispatch()
    const closeSearch=()=>{
        dispatch(searchSliceAction.setResultArr([]))
    }

    return (
        <div className={style.container}>
            <div className={style.flexContainer}>
                <h4 className={style.title}>فروشگاه‌ها</h4>
                {resultArr.length>0 &&
                        resultArr.map((item)=>{
                            return  <Link key={item.id} to={`/menu/${item.id}`} onClick={closeSearch} className={style.resultItem}>
                                            <svg width="24" height="18" viewBox="0 0 24 26" fill="#3A3D42" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.10557 3.22149C3.27497 2.8827 3.62123 2.6687 4 2.6687H19.9987C20.3773 2.6687 20.7235 2.88259 20.893 3.22125L22.8943 7.22124C22.9638 7.36016 23 7.51336 23 7.6687V8.6687C23 9.62235 22.6186 10.4869 22 11.1182V21.6687C22 22.221 21.5523 22.6687 21 22.6687H15C14.4477 22.6687 14 22.221 14 21.6687V17.1687C14 16.0641 13.1046 15.1687 12 15.1687C10.8954 15.1687 10 16.0641 10 17.1687V21.6687C10 22.221 9.55229 22.6687 9 22.6687H3C2.44772 22.6687 2 22.221 2 21.6687V11.1182C1.38141 10.4869 1 9.62235 1 8.6687V7.6687C1 7.51345 1.03615 7.36034 1.10557 7.22149L3.10557 3.22149ZM4 12.1333V20.6687H8V17.1687C8 14.9596 9.79086 13.1687 12 13.1687C14.2091 13.1687 16 14.9596 16 17.1687V20.6687H20V12.1333C19.8367 12.1566 19.6698 12.1687 19.5 12.1687C18.5207 12.1687 17.6353 11.7665 17 11.1182C16.3647 11.7665 15.4793 12.1687 14.5 12.1687C13.5207 12.1687 12.6353 11.7665 12 11.1182C11.3647 11.7665 10.4793 12.1687 9.5 12.1687C8.52065 12.1687 7.63526 11.7665 7 11.1182C6.36474 11.7665 5.47935 12.1687 4.5 12.1687C4.33024 12.1687 4.1633 12.1566 4 12.1333ZM21 7.90491V8.6687C21 9.49713 20.3284 10.1687 19.5 10.1687C18.6716 10.1687 18 9.49713 18 8.6687C18 8.11642 17.5523 7.6687 17 7.6687C16.4477 7.6687 16 8.11642 16 8.6687C16 9.49713 15.3284 10.1687 14.5 10.1687C13.6716 10.1687 13 9.49713 13 8.6687C13 8.11642 12.5523 7.6687 12 7.6687C11.4477 7.6687 11 8.11642 11 8.6687C11 9.49713 10.3284 10.1687 9.5 10.1687C8.67157 10.1687 8 9.49713 8 8.6687C8 8.11642 7.55228 7.6687 7 7.6687C6.44772 7.6687 6 8.11642 6 8.6687C6 9.49713 5.32843 10.1687 4.5 10.1687C3.67157 10.1687 3 9.49713 3 8.6687V7.90477L4.61803 4.6687H19.3808L21 7.90491Z"></path></svg>
                                            <span className={style.resultName}>{item.title}</span>
                                    </Link>
                        })
                }
            </div>
        </div>
    );
};

export default ResultSearch;