import React, {Component} from 'react';

import classes from './SurveyEditerPage.module.css';
import {AutoAffix} from 'react-overlays';

import SurveyPreviewContainer from '../Containers/SurveyPreview/SurveyPreviewContainer';
import QuestionListPanel from '../Containers/QuestionListPanel/QuestionListPanel';

class SurveyEditerPage extends Component {
    render () {
        return (
            <div className={classes.SurveyEditerPage}>
                <div className={classes.SurveyPreview}>
                    <SurveyPreviewContainer />
                </div>
                <div className={classes.SideBar}>
                    <AutoAffix>
                        <div>
                            <div className={classes.SwitchTab}>
                                <button>Add Question</button>
                                <button>Edit Question</button>
                                <button>Edit Survey</button>                        
                            </div>
                            <hr/>
                            <div className={classes.QuestionTypes}>
                                <QuestionListPanel />
                            </div>
                            <hr/>
                            <div className={classes.Footer}>
                                <button>Submit</button>
                            </div>
                        </div>
                    </AutoAffix>
                </div>
            </div>
        );
    };
};

export default SurveyEditerPage;