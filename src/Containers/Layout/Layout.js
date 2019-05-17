import React, {Fragment, Component} from 'react';

import classes from './Layout.module.css'; 
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import TopMenu from '../../Components/Navigation/TopMenu/TopMenu';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }); 
    }

    render () {
        return (
            <Fragment>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler} />
                <TopMenu />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}


export default Layout;