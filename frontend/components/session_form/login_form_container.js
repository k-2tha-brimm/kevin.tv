import React from 'react';
import { login } from '../../actions/session_action';
import { connect } from 'react-redux';
import SessionForm from '../session_form/session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
    return {
        formType: 'Log In',
        greeting: 'Log in to kevin.tv',
        errors: state.errors.session,
        alternativeAction: <Link to="/signup">Sign Up</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);