import React, {Component} from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './Containers/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import Logout from './Containers/Authentication/Logout';

import {authCheckState} from './Store/actions/authentication';

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }



  render () {
    let routes = (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/" exact component={HomePage} />
        <Redirect to='/' />  
      </Switch>
    );

    if(this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path={"/user/" + this.props.surveyId} component={UserPage} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={HomePage} />
          <Redirect to='/' />  
        </Switch>
      )
    }

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    surveyId: state.surveyEditer.survey.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
