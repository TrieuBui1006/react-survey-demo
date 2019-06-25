import React, { Component } from 'react'
import {connect} from 'react-redux';

import {updateSurvey} from '../../Store/actions/surveyEditer';
import {assembleSurvey} from '../../Store/actions/surveyEditer';
import EditFooterView from '../../Components/EditPanel/EditFooter';

class EditFooter extends Component {    
    render() {
        return (
            <div>
                <EditFooterView 
                    clicked={() => this.props.onSubmit(this.props.surveyId, this.props.token, this.props.survey)}
                    submit={this.props.isSubmitting}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        surveyId: state.surveyEditer.survey.id,
        survey: assembleSurvey(state.surveyEditer.survey),
        isSubmitting: state.surveyEditer.submitLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (surveyId, token, data) => dispatch(updateSurvey(surveyId, token, data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditFooter);
