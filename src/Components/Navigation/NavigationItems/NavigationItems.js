import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><strong>Home</strong></NavigationItem>
        <NavigationItem link="/login" ><strong>Login</strong></NavigationItem>
    </ul>
);

export default navigationItems;