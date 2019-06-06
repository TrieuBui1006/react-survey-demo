import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link, withRouter, Redirect} from 'react-router-dom';
import * as actionTypes from '../Store/actions/actionsTypes';

import classes from './HomePage.module.css';
import Button from '@material-ui/core/Button';

import NewSurvey from '../Containers/SurveyList/NewSurvey/NewSurvey';
import SurveyList from '../Containers/SurveyList/SurveyList';

class HomePage extends Component {
    componentDidMount() {
        this.props.onResetSurveyId();
    }

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

        let redirectPath = null;
        if(this.props.haveSurvId) {
            redirectPath = <Redirect to={"/user/" + this.props.surveyId + "/overview"} />
        }

        if(this.props.isAuthenticated) {
            home = (
                <div className={classes.HomePage}>
                    <NewSurvey 
                        loading={this.props.isLoading}
                        isError={this.props.isError} />
                    {redirectPath}
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
        isError: state.surveys.error !== null,
        surveyId: state.surveyEditer.survey.id,
        haveSurvId: state.surveyEditer.survey.id !== ''
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetSurveyId: () => dispatch({type: actionTypes.RESET_SURVEY_ID})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));
