import React from 'react';
import style from './restrantListSideBar.module.scss'
import GroupingItem from './GroupingItem';
import SideBarItemWrapper from '../RestrantList/SideBarItemWrapper';

const RestrantListSideBar = () => {
    return (
        <SideBarItemWrapper>
        <div className={style.container}>
            <h5 className={style.title}>همه دسته بندی ها</h5>
            <GroupingItem/>
            <GroupingItem/>
            <GroupingItem/>
            <GroupingItem/>
            <GroupingItem/>

            
        </div>

        </SideBarItemWrapper>
    );
};

export default RestrantListSideBar;