import React, {Fragment} from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import TopMenuItems from '../TopMenu/TopMenuItems/TopMenuItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <hr />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth}/>
                    {props.isAuth ? <TopMenuItems/> : null}
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;