import React from 'react';

import ReportItem from './ReportItem';
import classes from './Report.module.css';

const report = (props) => {
    const { reportResult, results } = props; 

    return (
        <div className={classes.Report}>
            <h2 className={classes.Counter}>Total Data: {results.length}</h2>
                {reportResult.map((d, index) => {
                    return (
                        <ReportItem data={d} key={d._id}/>
                    )
                })}
        </div>
    )
}

report.defaultProps = {};

export default report;