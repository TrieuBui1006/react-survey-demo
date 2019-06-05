import React from 'react';

import classes from './SurveyEditerPage.module.css';
import {AutoAffix} from 'react-overlays';

import SurveyPreviewContainer from '../Containers/SurveyPreview/SurveyPreviewContainer';
import EditTab from '../Containers/EditTab/EditTab';
import EditFooter from '../Containers/EditFooter/EditFooter';

const surveyEditerPage = () => {
    return (
        <div className={classes.SurveyEditerPage}>
            <div className={classes.SurveyPreview}>
                <SurveyPreviewContainer />
            </div>
            <div className={classes.SideBar}>
                <AutoAffix>
                    <div>
                        <EditTab />
                        <div className={classes.Footer}>
                            <EditFooter />
                        </div>
                    </div>
                </AutoAffix>
            </div>
        </div>
    );
};

export default surveyEditerPage;