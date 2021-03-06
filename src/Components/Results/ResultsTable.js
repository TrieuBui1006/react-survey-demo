import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import classes from './ResultsTable.module.css';
import Icon from '@material-ui/core/Icon';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ResultsTable extends Component {
    toggleSelectAll() {
        let { onSelectAll, onUnSelectAll, grid: { results } } = this.props;
        if (this.props.allSelect) {
          onUnSelectAll(results);
        } else {
          onSelectAll(results);
        }
    }

    render() {
        let { onSelectRow, rowSelects, allSelected, onDeleteRow, surveyId } = this.props;
        let { columns, results } = this.props.grid;
        let anySelected = Object.keys(rowSelects).some(k => rowSelects[k]);
        let isDisable = true;
        if(anySelected) {
            isDisable = false;
        }
    
        return (
            <div className={classes.ResultsTable}>
              <div className={classes.TableWrapper}>
                <div className={classes.Toolbar}>
                  <Button 
                    disabled={isDisable} 
                    variant="contained"
                    color="secondary"
                    size="medium"
                    onClick={() => onDeleteRow(results.filter(r => rowSelects[r.id]), surveyId)}><Icon>delete</Icon> Delete</Button>
                  <div className={classes.ConvertBtn}>
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button"
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText="Download as XLS"/>
                  </div>
                </div>
                <div className={classes.NotDisplay}>
                  <table id="table-to-xls">
                    <thead>
                      <tr>
                        <th className={classes.Index}>#</th>
                        {columns.map(col => {
                          return <th key={col.columnName}>{col.displayName}</th>
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {results.map((result, index) => {
                        return (
                            <tr
                                key={result.id}
                                onClick={() => this.props.onClickRow(result, index)}
                            >
                              <td className={classes.Index}>{index + 1}</td>
                              {columns.map((col, index) => {
                                return <td key={index}>{result[col.columnName]}</td>
                              })}
                            </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
                {/*-----------------------------------------------------------------------------*/}
                <table>
                  <thead>
                    <tr>
                      <th className={classes.SelectBox}>
                        <input
                            type="checkbox"
                            onClick={e => e.stopPropagation()}
                            onChange={this.toggleSelectAll.bind(this)}
                            checked={allSelected}
                        />
                      </th>
                      <th className={classes.Index}>#</th>
                      {columns.map(col => {
                        return <th key={col.columnName}>{col.displayName}</th>
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((result, index) => {
                      return (
                          <tr
                              key={result.id}
                              onClick={() => this.props.onClickRow(result, index)}
                          >
                            <td className={classes.SelectBox}>
                              <input
                                  type="checkbox"
                                  onClick={e => e.stopPropagation()}
                                  onChange={() => onSelectRow(result.id)}
                                  checked={rowSelects[result.id]}
                              />
                            </td>
                            <td className={classes.Index}>{index + 1}</td>
                            {columns.map((col, index) => {
                              return <td key={index}>{result[col.columnName]}</td>
                            })}
                          </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
        );
    }
}

export default ResultsTable;