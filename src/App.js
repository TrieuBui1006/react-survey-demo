import React, {Component} from 'react';

// import Spinner from './Components/UI/Spinner/Spinner';
import Layout from './Containers/Layout/Layout';
import SurveyEditerPage from './pages/SurveyEditerPage';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <SurveyEditerPage />
        </Layout>
      </div>
    );
  }
}

export default App;
