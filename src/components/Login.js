import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, clearAuthState } from '../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuthState());
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('this.state', this.state);
    const { username, email, password } = this.state;

    if (username && email && password) {
      this.props.dispatch(login(username, email, password));
    }
  };

  render() {
    const { error, inProgress, isLoggedin } = this.props.auth;
    // const { from } = this.props.location.state || { from: { pathname: '/' } };

    if (isLoggedin) {
    //   return <Redirect to={from} />;
        return <Navigate to='/' />
    }
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            type="username"
            placeholder="Username"
            required
            onChange={this.handleNameChange}
            value={this.state.username}
          />
        </div>
        <div className="field">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={this.handlePasswordChange}
            value={this.state.password}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Logging in...
            </button>
          ) : (
            <button onClick={this.handleFormSubmit} disabled={inProgress}>
              Log In
            </button>
          )}
        </div>
        {!isLoggedin && <div className="alert error-dailog">
          Don't have an account? <Link to="/signup">Create Account</Link>
          </div>}
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStateToProps)(Login);
