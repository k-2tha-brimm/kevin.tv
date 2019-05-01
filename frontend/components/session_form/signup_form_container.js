import React from 'react';
import { signup } from '../../actions/session_action';
import { connect } from 'react-redux';
import SessionForm from '../session_form/session_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        formType: 'Sign Up',
        greeting: 'Join kevin.tv today',
        errors: state.errors.session,
        // alternativeAction: <Link to="/login">Log In</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
              Signup
            </button>
          ),
          closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);