import { Home, Login, Signup, Navbar, BlogPost, SavedPosts, Page404, WriteBlog } from "./";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter as Router, Navigate, Routes } from "react-router-dom";
import { connect } from "react-redux";


class App extends Component {
  
  render() {
    const {isLoggedin} = this.props.auth;
    console.log("auth", this.props.auth);
    console.log("blogPost", this.props.blogPost);
    return (
      <Router basename="/TechPitch">
        <div>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              Component={Home}
            />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/post/:blogId" element={<BlogPost />} />
            {isLoggedin && <Route path="/writeblog" Component={WriteBlog} />}
            {isLoggedin && <Route path="/savedposts" Component={SavedPosts} />}
            <Route path="*" Component={Page404} />
          </Routes>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  posts: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    BlogPost: state.BlogPost,
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(App);
