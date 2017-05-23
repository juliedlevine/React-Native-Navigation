import { Actions } from 'react-native-router-flux';
import axios from 'axios';

import {
  HOME_UPDATE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
 } from './types';


export const homeUpdate = ({ prop, value }) => {
  return {
    type: HOME_UPDATE,
    payload: { prop, value }
  };
};

export const loginUser = (email, password) => {
      return (dispatch) => {
      dispatch({ type: LOGIN_USER });

      const axiosData = {
          email: email,
          password: password
      };

      const endpoint = "http://localhost:5007/api/user/login";

      axios.post(endpoint, axiosData)
      .then(response => {
        const user = response.data
        // console.log('user response: ', user );
        loginUserSuccess(dispatch, user);
      })
      .catch(err => {
        console.log('error: ', err);
        loginUserFail(dispatch);
      });

    };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
