import React, { useEffect, useState } from 'react';
import style from './restrantListSideBar.module.scss'
import GroupingItem from './GroupingItem';
import SideBarItemWrapper from '../RestrantList/SideBarItemWrapper';
import {  Link, NavLink, useParams } from 'react-router-dom';
import { sideBarCategory } from '../../utils/sideBarCategory';

const RestrantListSideBar = () => {
    const parmas=useParams()
    const [categoryData,setCategoryData]=useState([])
    const [isSubCategoryMenu,setIsSubCategoryMenu]=useState(false)
    const [groupTitle,setGroupTitle]=useState({
        title:'همه دسته بندی ها',
        link:`/service/${parmas.category}`
    })

    useEffect(()=>{
        if(sideBarCategory[parmas.category]){
            if(parmas.category){
                setCategoryData(sideBarCategory[parmas.category]);
                setIsSubCategoryMenu(false);
            }
           
            if(parmas.subcategory){
                const subcategoryItem= sideBarCategory[parmas.category].find((item)=>item.id===parmas.subcategory)
                if(subcategoryItem.subCategory){
                    setCategoryData(subcategoryItem.subCategory);
                    setIsSubCategoryMenu(true);
                    
                }
                
                
            }

            
        }
       
        
    },[parmas.category,parmas.subcategory,categoryData])
    useEffect(()=>{
            switch (parmas.subcategory) {
                case 'fastfood':
                    setGroupTitle({
                        title:'همه فست فود ها',
                        link:`/service/restrant/fastfood`
                    })
                    
                    break;
                case 'irani':
                   
                    setGroupTitle({
                        title:'همه ایرانی ها',
                        link:`/service/restrant/irani`
                    })
                    break;
                case 'kebab':
                    setGroupTitle({
                        title:'همه کباب ها',
                        link:`/service/restrant/kebab`
                    })
                    break;
                case 'food':
                    setGroupTitle({
                        title:'همه غذا ها',
                        link:`/service/cofe/food`
                    })
                    break;
                case 'warmdrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های گرم',
                        link:`/service/cofe/warmdrink`
                    })
                    break;
                case 'colddrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های سرد',
                        link:`/service/cofe/colddrink`
                    })
                    break;
               
                default:
                    setGroupTitle({
                        title:'همه دسته بندی ها',
                        link:`/service/${parmas.category}`
                    })
                    break;
            }
            
    },[parmas.subcategory,parmas.category])

   
   

    return (
   
     
        <SideBarItemWrapper>
           {isSubCategoryMenu && 
            <Link to={`/service/${parmas.category}`} className={style.backBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 9 16" fill="var(--sf-carbon-main)"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg>
            <span>بازگشت</span>
            </Link>
            }
            
        <div className={style.container}>
            <NavLink to={groupTitle.link} end className={({isActive})=>isActive ? style.activeLink : style.unActiveLink}>{groupTitle.title}</NavLink>
            {categoryData.map((item)=>(
                <GroupingItem key={item.id} id={item.id} title={item.title} menuNum={item.menuNum} img={item.img} hasSubCategory={item.subCategory} category={parmas.category} subcategory={parmas.subcategory} />
            ))}

            
        </div>

        </SideBarItemWrapper> 

    );
};

export default RestrantListSideBar;