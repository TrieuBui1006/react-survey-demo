import React, {Component} from 'react';
import {connect} from 'react-redux';

import classes from './TopMenuItems.module.css';
import TopMenuItem from './TopMenuItem/TopMenuItem';

class TopMenuItems extends Component {
    render () {
        return (
            <ul className={classes.TopMenuItems}>
                <TopMenuItem link={"/user/" + this.props.surveyId + "/overview"} >Overview</TopMenuItem>
                <TopMenuItem link={"/user/" + this.props.surveyId + "/editer"} >Editer</TopMenuItem>
                <TopMenuItem link={"/user/" + this.props.surveyId + "/test"}>Test</TopMenuItem>
                <TopMenuItem link={"/user/" + this.props.surveyId + "/data"} >Data</TopMenuItem>
                <TopMenuItem link={"/user/" + this.props.surveyId + "/report"} >Report</TopMenuItem>
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return {
        surveyId: state.surveyEditer.survey.id
    }
}

export default connect(mapStateToProps)(TopMenuItems);