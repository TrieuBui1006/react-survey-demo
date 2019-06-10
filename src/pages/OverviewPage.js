import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from '../axios-order';
import * as actionTypes from '../Store/actions/actionsTypes';

import OverviewEdit from '../Components/Overview/OverviewEdit';
import OverviewData from '../Components/Overview/OverviewData';
import Spinner from '../Components/UI/Spinner/Spinner';

import classes from './OverviewPage.module.css';

import {fetchSurvey} from '../Store/actions/surveyEditer';

class OverviewPage extends Component {
    componentDidMount() {
        this.props.onfetchSurvey(this.props.surveyId, this.props.token);
    }

    deleteSurveyHandler = (surveyId) => {
        axios.delete('/surveys/' + surveyId + '.json?auth=' + this.props.token)
            .then(res => {
                this.props.onRedirect();
            });
    }

    render() {
        let overview = <Spinner />
        if(!this.props.isLoading) {
            overview = (
                <div className={classes.OverviewPage}>
                    {this.props.redirect ? <Redirect to="/" /> : null}
                    <OverviewEdit
                        title={this.props.title}
                        creatorDate={this.props.creatorDate}
                        lastModified={this.props.lastModified} />
                    <OverviewData 
                        delete={() => {this.deleteSurveyHandler(this.props.surveyId)}}/>
                </div>
            )
        }

        return (
            <Fragment>
                {overview}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        surveyId: state.surveyEditer.survey.id,
        token: state.auth.token,
        title: state.surveyEditer.survey.title,
        creatorDate: state.surveyEditer.survey.creatorDate,
        lastModified: state.surveyEditer.survey.lastModified,
        redirect: state.surveyEditer.redirect,
        isLoading: state.surveyEditer.surveyLoading 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchSurvey: (surveyId, token) => dispatch(fetchSurvey(surveyId, token)),
        onRedirect: () => dispatch({type: actionTypes.REDIRECT_PAGE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
