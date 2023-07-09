import { combineReducers } from "redux";
import auth from "./auth";
import blogPost from "./blogPost";

export default combineReducers({ auth, blogPost });
