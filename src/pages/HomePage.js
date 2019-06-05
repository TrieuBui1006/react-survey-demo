import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import classes from './HomePage.module.css';
import Button from '@material-ui/core/Button';

import NewSurvey from '../Containers/SurveyList/NewSurvey/NewSurvey';

class HomePage extends Component {
    render() {
        let home = (
            <div className={classes.HomePageWelcome}>
                <h1>Welcome To React Survey</h1>
                <p><strong>Please Login to use our sevices!</strong></p>
                <Link to="/login">
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large" >LOGIN</Button>
                </Link>
            </div>
        )
        if(this.props.isAuthenticated) {
            home = (
                <div className={classes.HomePage}>
                    <h1>ahihi</h1>
                    <NewSurvey />
                    <Link to="/user">Help</Link>
                </div>
            )
        }

        return (
            <Fragment>
                {home}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(HomePage);
