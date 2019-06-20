import React from 'react';

import classes from './ReportTable.module.css';

const reportTable = (props) => {
    return (
        <div className={classes.ReportTable}>
            <table>
                <thead>
                    <tr>
                        <th>Options</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default reportTable
