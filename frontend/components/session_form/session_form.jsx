import React from 'react';
import { withRouter } from 'react-router';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_action';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      month: '',
      day: '',
      year: '',
      email: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

    const demoUser = {username: 'demo', password: 'hunter12'};
    // const MONTHS = [
    //   "none",
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December"
    // ]



    const signInForm = (
        <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="modal-greeting">{this.props.greeting}</div>
            <br/>
            <div className="modal-buttons-container">
              <div className="button-container-underline-left-signin"></div>
                <li><button type="button">{this.props.formType}</button></li> <li>{this.props.otherForm}</li>
              <div className="button-container-underline-right-signin"></div>
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
            <a href="https://www.twitch.tv" className="joke-link">Trouble logging in?</a>

            <input className="session-submit" type="submit" value={this.props.formType} />
            <div className="line-break-container">
                <div className="right-side-of-or"></div>
                <br/>
                    <p className="or-in-line-break">or</p>
                <div className="left-side-of-or"></div>
            </div>
            <input className="demo-submit" type="submit" value="Demo Sign In" onClick={() => this.props.action(demoUser).then(this.props.closeModal)} />
          </div>
        </form>
      </div>
    );




    const logInForm = (
        <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="modal-greeting">{this.props.greeting}</div>
            <br/>
            {/* <div className="modal-buttons-container">
              <div className="button-container-underline-left"></div>
                  <li>{this.props.otherForm}</li> <li><button type="button">{this.props.formType}</button></li>
                <div className="button-container-underline-right"></div>
            </div> */}

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
                className="username-login-input"
              />
            </label>
            <div className="username-description">
              <p>This is the name that people will know you by on Kevin.Tv. You MIGHT be able to change it later.</p>
            </div>
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
            <label>Date of Birth
            <br/>
            <div className="birthday-form">
              <select className="month-dropdown" value={this.state.month} onChange={this.update('month')}>
                <option selected="true" disabled="disabled">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <input type="text"
                  placeholder="Day"
                  value={this.state.day}
                  onChange={this.update('day')}
                  className="day-input"
                  />
              <input type="text"
                  value={this.state.year}
                  placeholder="Year"
                  onChange={this.update('year')}
                  className="year-input"
                  />
            </div>
            </label>
            <br/>

            <label>Email
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>

            <p className="fake-tos">By clicking Sign Up, you are indicating that you have met the founder of Kevin.Tv. Venture forth, brave one.</p>

            <input className="session-submit" type="submit" value={this.props.formType} />

            {/* <div className="line-break-container">
                <div className="right-side-of-or"></div>
                <br/>
                    <p className="or-in-line-break">or</p>
                <div className="left-side-of-or"></div>
            </div>
            <div className="redirect-to-signup">
              {this.props.otherForm}
            </div> */}
            </div>
        </form>
      </div>
    );




    return (
        this.props.formType === 'Log In' ? signInForm : logInForm
    );




  }
}

export default withRouter(SessionForm);
