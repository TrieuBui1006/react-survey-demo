import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Survey from '../Components/Survey/Survey';
import {assembleSurvey} from '../Store/actions/surveyEditer';
import {submitSurvey} from '../Store/actions/survey';

import classes from './TestPage.module.css';

class TestPage extends Component {
    render () {
        return (
            <div className={classes.TextPage}>
                <h3 className={classes.Title}>You Are In Test Mode!</h3>
                <div>
                    <Survey {...this.props}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        survey: assembleSurvey(state.surveyEditer.survey)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: bindActionCreators(submitSurvey, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
