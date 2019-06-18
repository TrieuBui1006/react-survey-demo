import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'

import {resultsToGrid, getRowSelects, getAllSelected, toggleRowSelect, selectAll, unSelectAll, deleteRows} from '../../Store/actions/data';
import ResultTable from '../../Components/Results/ResultsTable';

class ResultTableContainer extends Component {
    render() {
        return (
            <ResultTable {...this.props}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        grid: resultsToGrid(state.data),
        rowSelects: getRowSelects(state.data),
        allSelect: getAllSelected(state.data)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onClickRow: bindActionCreators(openModal, dispatch),
        onSelectRow: bindActionCreators(toggleRowSelect, dispatch),
        onSelectAll: bindActionCreators(selectAll, dispatch),
        onUnSelectAll: bindActionCreators(unSelectAll, dispatch),
        onDeleteRow: bindActionCreators(deleteRows, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultTableContainer);