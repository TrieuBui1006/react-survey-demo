import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/home" exact><strong>Home</strong></NavigationItem>
        {!props.isAuthenticated
            ? <NavigationItem link="/login" ><strong>Login</strong></NavigationItem>
            : <NavigationItem link="/logout" ><strong>Logout</strong></NavigationItem>}
    </ul>
);

export default navigationItems;