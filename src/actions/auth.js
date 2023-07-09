import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../store/fireStore";
import {
    LOGIN_START,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    AUTHENTICATE_USER,
    LOG_OUT,
    SIGNUP_START,
    SIGNUP_FAILED,
    SIGNUP_SUCCESS,
    CLEAR_AUTH_STATE,
  } from './actionTypes';
  
  
  export function startLogin() {
    return {
      type: LOGIN_START,
    };
  }
  export function loginFailed(errorMessage) {
    return {
      type: LOGIN_FAILED,
      error: errorMessage,
    };
  }
  
  export function loginSuccess(user) {
    return {
      type: LOGIN_SUCCESS,
      user,
    };
  }
  
  export function login(username, email, password) {
    return (dispatch) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          user.displayName = username;
          // ...
          // console.log("user", user);
          dispatch(loginSuccess({username:user.displayName, email:user.email, userId:user.uid}))
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, " ", errorMessage);
          dispatch(signupFailed(errorCode));
        });      
    };
  }
  
  export function authenticateUser(user) {
    return {
      type: AUTHENTICATE_USER,
      user,
    };
  }
  
  export function logoutUser() {
    return {
      type: LOG_OUT,
    };
  }
  
  export function signup(username,email, password) {
    return (dispatch) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          user.displayName = username;
          // ...
          // console.log("user", user);
          dispatch(signupSuccessful({username:user.displayName, email:user.email, userId:user.uid}));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          // console.log("errorMessage", errorMessage);
          dispatch(signupFailed(errorCode));
        });;
    }
  }
  
  export function startSingup() {
    return {
      type: SIGNUP_START,
    };
  }
  
  export function signupFailed(error) {
    return {
      type: SIGNUP_FAILED,
      error,
    };
  }
  
  export function signupSuccessful(user) {
    return {
      type: SIGNUP_SUCCESS,
      user,
    };
  }
  
  export function clearAuthState() {
    return {
      type: CLEAR_AUTH_STATE,
    };
  }
  
  