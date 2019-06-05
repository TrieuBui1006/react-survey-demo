import React,{Fragment} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom';

import TopMenuBar from '../Components/Navigation/TopMenu/TopMenu';
import OverviewPage from './OverviewPage';
import EditerPage from './SurveyEditerPage';
import TestPage from './TestPage';
import DataPage from './DataPage';
import ReportPage from './ReportPage';

const UserPage = (props) => {
    return (
        <Fragment>
            <TopMenuBar />
            <Switch>
                <Route 
                    path={props.match.url + '/overview'} 
                    component={OverviewPage} />
                <Route 
                    path={props.match.url + '/editer'} 
                    component={EditerPage} />
                <Route 
                    path={props.match.url + '/test'} 
                    component={TestPage} />
                <Route 
                    path={props.match.url + '/data'}
                    component={DataPage} />
                <Route 
                    path={props.match.url + '/report'}
                    component={ReportPage} />
            </Switch>
        </Fragment>
    )
}

export default withRouter(UserPage);
