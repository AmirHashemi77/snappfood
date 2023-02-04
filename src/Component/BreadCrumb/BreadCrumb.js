import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './breadCrumb.module.scss';
import { sideBarCategory } from '../../utils/sideBarCategory';
import { breadCrumbData } from '../../utils/breadCrumbData';

const BreadCrumb = () => {
    const parmas =useParams()
    const [breadCrumbArr,setBreadCrumbArr]=useState([])
    
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
    
    return (
        <div className={style.container}>
            <Link to='/' className={style.breadCrumbItem}>اسنپ فود /</Link>
            {
                breadCrumbArr.map((item,index)=>{

                    return index === (breadCrumbArr.length -1 ) ? <p key={item.id} className={style.lastBreadCrumbItem}>{item.title}</p> : <Link className={style.breadCrumbItem} key={item.id} to={item.link}>{`${item.title} /`}</Link>
                       
                })
            }
        </div>
    );
};

export default BreadCrumb;