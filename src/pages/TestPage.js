import React, {Component} from 'react';
import {connect} from 'react-redux';

import Survey from '../Components/Survey/Survey';
import {assembleSurvey} from '../Store/actions/surveyEditer';

class TestPage extends Component {
    render () {
        return (
            <div>
                <h1>You Are In Test Mode!</h1>
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

export default connect(mapStateToProps)(TestPage);
