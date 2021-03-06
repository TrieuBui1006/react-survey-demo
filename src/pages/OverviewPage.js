import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from '../axios-order';
import * as actionTypes from '../Store/actions/actionsTypes';

import OverviewEdit from '../Components/Overview/OverviewEdit';
import OverviewData from '../Components/Overview/OverviewData';
import Spinner from '../Components/UI/Spinner/Spinner';

import classes from './OverviewPage.module.css';

import {fetchSurvey, toggleSubmit} from '../Store/actions/surveyEditer';
import {fetchData} from '../Store/actions/data';
import {lastSubmitDate, currentResultToday} from '../ulitity/ulitity';

class OverviewPage extends Component {
    componentDidMount() {
        this.props.onfetchSurvey(this.props.surveyId, this.props.token);
        this.props.onfetchData(this.props.surveyId, this.props.token)
    }

    deleteSurveyHandler = (surveyId) => {
        axios.delete('/surveys/' + surveyId + '.json?auth=' + this.props.token)
            .then(res => {
                axios.delete('results/' + surveyId + '.json?auth=' + this.props.token)
                    .then(r => {
                        this.props.onRedirect();
                    })
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
                        lastModified={this.props.lastModified}
                        userId={this.props.userId}
                        surveyId={this.props.surveyId}
                        submit={this.props.submitting}
                        onToggle={() => this.props.onToggle(this.props.surveyId, this.props.token, !this.props.submitting)} />
                    <OverviewData 
                        delete={() => {this.deleteSurveyHandler(this.props.surveyId)}}
                        count={this.props.submitCount}
                        lastSubmit={this.props.lastDate}
                        currentCount={this.props.currentCount} />
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
        userId: state.auth.userId,
        title: state.surveyEditer.survey.title,
        creatorDate: state.surveyEditer.survey.creatorDate,
        lastModified: state.surveyEditer.survey.lastModified,
        redirect: state.surveyEditer.redirect,
        isLoading: state.surveyEditer.surveyLoading,
        submitting: state.surveyEditer.survey.submitting,
        submitCount: state.data.results.length,
        lastDate: lastSubmitDate(state.data.results, state.surveyEditer.survey.creatorDate),
        currentCount: currentResultToday(state.data.results)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onfetchSurvey: (surveyId, token) => dispatch(fetchSurvey(surveyId, token)),
        onfetchData: (surveyId, token) => dispatch(fetchData(surveyId, token)),
        onRedirect: () => dispatch({type: actionTypes.REDIRECT_PAGE}),
        onToggle: (surveyId, token, submit) => dispatch(toggleSubmit(surveyId, token, submit))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
