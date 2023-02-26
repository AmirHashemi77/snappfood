import React from 'react';
import style from './menuList.module.scss'
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';
const MenuList = () => {
    const currentRestrant=useSelector((state)=>state.restrants.currentRestrant)
    
    
    
    return (
        <ul className={style.container}>
            {
            currentRestrant.menu && 
                currentRestrant.menu.map((item)=>{
                return    <Link to={item.id} spy={true} smooth={true} offset={-100} className={style.menuItem} activeClass={style.active} key={item.id} >{item.category}</Link>
                })
            }  
          
            
        </ul>
    );
};

export default MenuList;