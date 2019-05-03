import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_action';
import LeftHand from '../left_hand_menu/left_hand';

const msp = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}