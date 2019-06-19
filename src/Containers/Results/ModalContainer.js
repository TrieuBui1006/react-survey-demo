import { connect } from 'react-redux';
import Modal from '../../Components/UI/Modal/Modal';
import {getColumns, closeModal} from '../../Store/actions/data';

const mapStateToProps = state => {
  return {
    show: state.data.modal.showModal,
    result: state.data.modal.result,
    columns: getColumns(state.data)
  };
};

const mapDispatchToProps = dispatch => {
    return {
        modalClosed: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);