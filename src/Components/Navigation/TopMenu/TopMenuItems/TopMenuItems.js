import React from 'react';

import classes from './TopMenuItems.module.css';
import TopMenuItem from './TopMenuItem/TopMenuItem';

const topMenuItems = () => {
    return (
        <ul className={classes.TopMenuItems}>
            <TopMenuItem link="/user/overview" >Overview</TopMenuItem>
            <TopMenuItem link="/user/editer" >Editer</TopMenuItem>
            <TopMenuItem link="/user/test">Test</TopMenuItem>
            <TopMenuItem link="/user/data" >Data</TopMenuItem>
            <TopMenuItem link="/user/report" >Report</TopMenuItem>
        </ul>
    );
}

export default topMenuItems;