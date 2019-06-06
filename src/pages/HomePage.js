import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import classes from './HomePage.module.css';
import Button from '@material-ui/core/Button';

import NewSurvey from '../Containers/SurveyList/NewSurvey/NewSurvey';
import SurveyList from '../Containers/SurveyList/SurveyList';

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
                    <NewSurvey 
                        loading={this.props.isLoading}
                        isError={this.props.isError} />
                    {/* <Link to="/user">Help</Link> */}
                    <SurveyList />
                    {this.props.error ? <p>Check your Internet connection or Sever error</p> : null}
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
        isAuthenticated: state.auth.token !== null,
        isLoading: state.surveys.loading,
        error: state.surveys.error,
        isError: state.surveys.error !== null
    }
}

export default withRouter(connect(mapStateToProps)(HomePage));
