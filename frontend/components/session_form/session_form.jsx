import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_action';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateModal = this.updateModal.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.action(user).then(this.props.closeModal);
  }

//   updateModal(modal) {
//       return this.setState({ui: {modal: modal}})
//   }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    // const demouser = {username: 'demo', password: 'hunter12'};
    return (

      <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="modal-greeting">{this.props.greeting}</div>
            <br/>
            <div className="modal-buttons-container">
                {this.props.formType} | {this.props.otherForm}
                {/* <button onClick={updateModal('login')}>Log</button> */}
            </div>

            <div onClick={this.props.closeModal} className="close-x">
                <svg viewBox="0 0 40 40">
                    <path className="close-x-svg" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>
            </div>
            <div className="modal-errors-container">
                {this.renderErrors()}
            </div>

          <div className="login-form">
            <br/>
            <label>Username
            <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
