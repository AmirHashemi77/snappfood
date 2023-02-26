import React, { useEffect, useRef, useState } from 'react';
import style from './restrants.module.scss';
import CategoryList from '../../Component/Header/CategoryList';
import Header from '../../Component/Header/Header';
import RestrantListSideBar from '../../Component/RestrantListSideBar/RestrantListSideBar';
import RestrantList from '../../Component/RestrantList/RestrantList';
import RestrantCard from '../../Component/RestrantSlider/RestrantCard';
import Footer from '../../Component/Footer/Footer';
import RestrantSort from '../../Component/RestrantsSortSection/RestrantSort';
import RestrantFilter from '../../Component/RestrantsFilter/RestrantFilter';
import RestrantPriceFilter from '../../Component/RestrantPriceFilter/RestrantPriceFilter';
import { useParams } from 'react-router-dom';
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestrantListData } from '../../Store/action/restrantListAction';
import Loading from '../../Component/Loading/Loading';


const Restrants = () => {
    const sideBar=useRef();
    const parmas=useParams()
    const dispatch=useDispatch();
    const restrantListData=useSelector((state)=>state.restrants.restrantListArr);
    const [restrantList,setRestrantList]=useState([])
    const loading=useSelector((state)=>state.ui.showLoading);
    window.onwheel=(e)=>{
        if(e.deltaY>0 && sideBar.current){
            sideBar.current.scrollBy(0,sideBar.current.offsetHeight)
     }else if(e.deltaY<0 && sideBar.current){
         sideBar.current.scrollBy(0,-sideBar.current.offsetHeight)
        }
     
     }
    
    useEffect(()=>{
        dispatch(fetchRestrantListData(parmas.category))
    },[parmas.category,dispatch])
    useEffect(()=>{
        if (parmas.category && !parmas.subcategory && !parmas.twosubcategory) {
           setRestrantList(restrantListData)
       }
       if (parmas.subcategory && !parmas.twosubcategory) {
            const filteredList= restrantListData.filter((item)=>item.filterCategory.includes(parmas.subcategory)===true);
            
          
                setRestrantList(filteredList)

            
       }
       if (parmas.twosubcategory) {
        const filteredList= restrantListData.filter((item)=>item.filterCategory.includes(parmas.twosubcategory)===true);
       
            setRestrantList(filteredList)

        
        
   }
    },[parmas.category,parmas.subcategory,parmas.twosubcategory,restrantListData])
    
    
    
    return (
        <>
            <Header/>
            <CategoryList/>
            {restrantList.length>0 && <BreadCrumb/>}

           {restrantList.length===0 ?
            <div className={style.noItem}>متاسفانه آیتمی پیدا نشد</div> :
            <div className={style.main}>
                <RestrantSort/>
                <div className={style.flexContainer}>
                       
                            <div ref={sideBar} className={style.sideBar}>
                            
                            { 
                           ( parmas.category==='restrant' || parmas.category==='cofe' ||parmas.category==='bakery') && 
                            <RestrantListSideBar />
                            }
                            <div className={style.priceFilter}><RestrantPriceFilter/></div>
                            <RestrantFilter/>
                            </div>
                        
                        {
                            !loading ? <RestrantList> 
                                            {
                                                restrantList.map((item)=>(
                                                    <RestrantCard key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} rate={item.rate} logo={item.logo} image={item.image} />
                                                ))
                                            }   
                                        </RestrantList> :

                                        <div className={style.loadingWrapper}><Loading/></div>
                        }
                </div>
            </div> 
            }
            <Footer/>

        </>
       
    );
};

export default Restrants;