import React, {Component} from 'react';

import classes from './SurveyEditerPage.module.css';
import {AutoAffix} from 'react-overlays';

import SurveyPreviewContainer from '../Containers/SurveyPreview/SurveyPreviewContainer';
import EditTab from '../Containers/EditTab/EditTab';

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
                            <EditTab />
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