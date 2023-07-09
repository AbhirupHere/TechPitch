import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../actions/auth";

class Navbar extends Component {

  logOut = () => {
    // localStorage.removeItem('token');
    this.props.dispatch(logoutUser());
  };

  render() {
    const { auth } = this.props;
    return (
      <nav className="nav">
        <div className="left-div">
          <Link to="/">
            <img
              className="logo"
              src="https://cdn-icons-png.flaticon.com/128/3959/3959542.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="search-container">
          <img
            className="search-icon"
            src="https://cdn-icons-png.flaticon.com/128/151/151773.png"
            alt="search-icon"
          />
          <input placeholder="Search" />
        </div>
        <div className="right-nav">
        {auth.isLoggedin && (
          <div className="user">
            <Link to="/settings">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                alt="user-dp"
                id="user-dp"
              />
            </Link>
            <span>{auth.user.username}</span>
          </div>
        )}

        <div className="nav-links">
          <ul>
            {auth.isLoggedin && (
              <li>
                <Link to={'/writeblog'}><img src="https://cdn-icons-png.flaticon.com/128/95/95358.png" className="navbar-icons"/></Link>
              </li>
            )}

            {auth.isLoggedin && <li onClick={this.logOut}>Log out</li>}

            {!auth.isLoggedin && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };
  
export default connect(mapStateToProps)(Navbar);
