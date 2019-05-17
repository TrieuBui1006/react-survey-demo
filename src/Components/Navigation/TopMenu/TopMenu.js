import React from 'react';

import classes from './TopMenu.module.css';
import TopMenuItems from './TopMenuItems/TopMenuItems';

const topMenu = (props) => (
    <header className={classes.TopMenu}>
        <nav className={classes.DesktopOnly}>
            <TopMenuItems />
        </nav>
    </header>
);

export default topMenu;