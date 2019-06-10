import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import SurveyPreview from '../../Components/SurveyPreview/SurveyPreview';
import QuestionList from '../../Components/SurveyPreview/QuestionList';
import {activeQuestion, cloneQuestion} from '../../Store/actions/surveyEditer';
import * as actionTypes from '../../Store/actions/actionsTypes';

class SurveyPreviewContainer extends Component {
    render () {
        let { survey, ...rest} = this.props;
        return (
            <SurveyPreview {...this.props}>
                <QuestionList {...survey} {...rest}/>
            </SurveyPreview>
        );
    }
}

const mapStateToProps = state => {
    return {
        survey: state.surveyEditer.survey,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHeaderActive: () => {
            dispatch(activeQuestion('header'));
          },
        onActive: bindActionCreators(activeQuestion, dispatch),
        onUp: (question) => dispatch({
            type: actionTypes.SORT_QUESTION_UP,
            questionId: question._id
        }),
        onDown: (question) => dispatch({
            type:actionTypes.SORT_QUESTION_DOWN,
            questionId: question._id
        }),
        onClone: bindActionCreators(cloneQuestion, dispatch),
        onRemove: (question) => dispatch({
            type: actionTypes.REMOVE_QUESTION,
            questionId: question._id
        })
    }
}    
export default connect(mapStateToProps, mapDispatchToProps)(SurveyPreviewContainer);