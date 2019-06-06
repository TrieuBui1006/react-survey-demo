import React,{Fragment} from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

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
                    exact
                    path={props.match.url + '/overview'} 
                    component={OverviewPage} />
                <Route 
                    exact
                    path={props.match.url + '/editer'} 
                    component={EditerPage} />
                <Route 
                    exact
                    path={props.match.url + '/test'} 
                    component={TestPage} />
                <Route
                    exact 
                    path={props.match.url + '/data'}
                    component={DataPage} />
                <Route
                    exact 
                    path={props.match.url + '/report'}
                    component={ReportPage} />
                <Redirect to='/' />
            </Switch>
        </Fragment>
    )
}

export default withRouter(UserPage);
