import LeftHandMenu from '../left_hand_menu/left_hand';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';


const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id],
    };
};

const mdp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(msp, mdp)(LeftHandMenu);