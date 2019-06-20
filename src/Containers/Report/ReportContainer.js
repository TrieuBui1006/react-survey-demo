import {connect} from 'react-redux';

import Report from '../../Components/Report/Report';
import {resultsToReport} from '../../Store/actions/report';

const mapStateToProps = state => {
    return {
        ...resultsToReport(state.data)
    }
}

export default connect(mapStateToProps)(Report);