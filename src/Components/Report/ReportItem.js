import React, {Component} from 'react';
// import ReactDOM from 'react-dom';

import ReportGraph from './ReportGraph';
import ReportTable from './ReportTable';
import classes from './ReportItem.module.css';

class ReportItem extends Component {
  state = {
    width: 500
  }

  componentWillMount() {
    this.setState({width: window.innerWidth})
  }

    render() {
      let { data } = this.props;
      return (
          <div className={classes.ReportItemWrapper}>
            <h3 className={classes.Title}>{data.title}</h3>
            <div 
                key={data.title}
                className={classes.ReportItem}>
              <div className={classes.Graph}>
                <ReportGraph 
                  data={data.stats}
                  width={this.state.width} />
              </div>
              <div>
                <ReportTable data={data.stats}/>
              </div>
            </div>
          </div>
      );
    }
  }
  
  ReportItem.defaultProps = {};
  
  export default ReportItem;