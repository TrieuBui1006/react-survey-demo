import React, {Component} from 'react';

import classes from './SurveyEditerPage.module.css';

class SurveyEditerPage extends Component {
    render () {
        return (
            <div className={classes.SurveyEditerPage}>
                <div className={classes.SurveyPreview}>
                    <h1 className={classes.SurveyTitle}>Survey Title</h1>
                    <div className={classes.Question}>
                        <h3>Question 1:</h3>
                        <input />
                    </div>
                    <div className={classes.Question}>
                        <h3>Question 2:</h3>
                        <textarea />
                    </div>
                </div>
                <div className={classes.SideBar}>
                    <div>
                        <button>Add Question</button>
                        <button>Edit Question</button>
                        <button>Edit Survey</button>                        
                    </div>
                    <hr/>
                    <div>
                        <button>Single Line Question</button>
                        <button>Multi Line Question</button>
                        <button>Multi Choices Question</button>
                        <button>Dropdown Question</button>
                        <button>Checkbox Question</button>
                    </div>
                    <hr/>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        );
    };
};

export default SurveyEditerPage;