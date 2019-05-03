import React from 'react';
import { login, resetErrors } from '../../actions/session_action';
import { connect } from 'react-redux';
import SessionForm from '../session_form/session_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        greeting: 'Log in to kevin.tv',
        errors: state.errors.session,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
              Sign Up
            </button>
          ),
        closeModal: () => dispatch(closeModal()),
        resetErrors: () => dispatch(resetErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);