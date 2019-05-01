import { connect } from 'react-redux';
import RightNav from './right_nav';
import { logout } from '../../actions/session_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);