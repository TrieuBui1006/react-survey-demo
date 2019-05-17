import React from 'react';
import {NavLink} from 'react-router-dom'; 

import classes from './TopMenuItem.module.css';

const topMenuItem = (props) => (
    <li className={classes.TopMenuItem}>
        <NavLink 
            to={props.link}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default topMenuItem;