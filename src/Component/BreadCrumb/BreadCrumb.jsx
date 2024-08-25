import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './breadCrumb.module.scss';
import { sideBarCategory } from '../../utils/sideBarCategory';
import { breadCrumbData } from '../../utils/breadCrumbData';
import { useSelector } from 'react-redux';

const BreadCrumb = () => {
    const parmas =useParams()
    const [breadCrumbArr,setBreadCrumbArr]=useState([])
    const currentRestrant=useSelector((state)=>state.restrants.currentRestrant)
    useEffect(()=>{
        
        if(parmas.category){
            const currentCategory={...breadCrumbData.find((item)=>item.id ===parmas.category), link:`/service/${parmas.category}`};
            setBreadCrumbArr([currentCategory])

            
            
            if(parmas.subcategory){
                const currentSubCategory={...sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory), link:`/service/${parmas.category}/${parmas.subcategory}`}
              
               setBreadCrumbArr((prev)=>[...prev,currentSubCategory])
            }
            if(parmas.twosubcategory){
                
                const currentSubCategory=sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory);
                const currentTwoSubCategory=currentSubCategory.subCategory.find((item)=>item.id ===parmas.twosubcategory);
                setBreadCrumbArr((prev)=>[...prev,currentTwoSubCategory])
                
            }

        }
       
    },[parmas.category,parmas.subcategory,parmas.twosubcategory])

    useEffect(()=>{
        console.log(breadCrumbArr); 
    },[breadCrumbArr])

    useEffect(()=>{
        if(parmas.restrantId && currentRestrant.id){
            const category={...breadCrumbData.find((item)=>item.id===currentRestrant.type),link:`/service/${currentRestrant.type}`};
            
            const restrantname={title:currentRestrant.title,id:currentRestrant.id};
            setBreadCrumbArr([category,restrantname])
            
        }
    },[parmas.restrantId,currentRestrant])
    return (
        <div className={style.container}>
            <Link to='/' className={style.breadCrumbItem}>اسنپ فود /</Link>
            {    
                breadCrumbArr.map((item,index)=>{

                    return index === (breadCrumbArr.length -1 ) ? <p key={item.id} className={style.lastBreadCrumbItem}>{item.title}</p> : <Link key={item.id} className={style.breadCrumbItem}  to={item.link}>{`${item.title} /`}</Link>
                       
                })
            }
        </div>
    );
};

export default BreadCrumb;