// import "../styles/App.css";
// import "./styles/tailwind.css";
import { Home, Login, Signup, Navbar, BlogPost, SavedPosts, Page404, WriteBlog } from "./";

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route, BrowserRouter as Router, Navigate, Routes } from "react-router-dom";
import { connect } from "react-redux";

// const PrivateRoute = (privateRouteProps) => {
//   return (
//     <Route
//       path={path}
//       render={(props) => {
//         return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" {...props} />;
//       }}
//     />
//   );
// };


const PrivateRoute = ({path, Component, isLoggedin}) => {
  return (
    <Route
      path={path}
      render={(props) => {
        isLoggedin ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" replace />
        )
        }
      }
    />
  );
};



class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(fetchposts());
  }

  componentWillUnmount() {
    
  }

  render() {
    const {isLoggedin} = this.props.auth;
    console.log("auth", this.props.auth);
    console.log("blogPost", this.props.blogPost);
    return (
      <Router>
        <div>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              // render={(props) => {
              //   return <Home {...props} />;
              // }}
              Component={Home}
            />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
            <Route path="/post/:blogId" element={<BlogPost />} />
            {isLoggedin && <Route path="/writeblog" Component={WriteBlog} />}
            {isLoggedin && <Route path="/savedposts" Component={SavedPosts} />}
            <Route path="*" Component={Page404} />
            {/* <PrivateRoute path="/saved" Component={SavedPosts} isLoggedIn={isLoggedin} /> */}
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
