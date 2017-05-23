import axios from 'axios';
import { GET_EXPENSES } from './types';

export const getExpenseData = (token) => {
  console.log('in getExpenseData with token: ', token);
  return (dispatch) => {
  // dispatch({ type: LOGIN_USER });

  const axiosData = {
      token: token,
      timeFrame: "thismonth"
  };

  const endpoint = "http://localhost:5007/api/expenses";

  axios.post(endpoint, axiosData)
  .then(response => {
    const expenses = response.data
    console.log('expense data returned: ', expenses );
    // let user = { email: email, firstName: first, lastName: last, token: token};
    // loginUserSuccess(dispatch, user);
  })
  .catch(err => {
    console.log('error retrieving expenses: ', err);
    // loginUserFail(dispatch);
  });

};


  return {
    type: GET_EXPENSES,
    payload: token
  };
};
