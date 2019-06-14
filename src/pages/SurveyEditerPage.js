import React, {Fragment} from 'react';

import classes from './SurveyEditerPage.module.css';
import {AutoAffix} from 'react-overlays';

import SurveyPreviewContainer from '../Containers/SurveyPreview/SurveyPreviewContainer';
import EditTab from '../Containers/EditTab/EditTab';
import EditFooter from '../Containers/EditFooter/EditFooter';

const surveyEditerPage = () => {
    return (
        <Fragment>
            <h3 className={classes.SmallScreen}>Please use bigger screen device for Editer !</h3>
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
        </Fragment>
    );
};

export default surveyEditerPage;