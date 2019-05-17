import React from 'react';

import classes from './TopMenuItems.module.css';
import TopMenuItem from './TopMenuItem/TopMenuItem';

const topMenuItems = () => (
    <ul className={classes.TopMenuItems}>
        <TopMenuItem link="/overview" >Overview</TopMenuItem>
        <TopMenuItem link="/editer" >Editer</TopMenuItem>
        <TopMenuItem link="/data" >Data</TopMenuItem>
        <TopMenuItem link="/report" >Report</TopMenuItem>
    </ul>
);

export default topMenuItems;