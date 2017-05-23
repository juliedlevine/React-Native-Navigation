import { combineReducers } from 'redux';
import SettingsReducer from './SettingsReducer';
import HomeReducer from './HomeReducer';


export default combineReducers({
  auth: HomeReducer,
  expenses: SettingsReducer,
});

// export default combineReducers({
//   auth: HomeReducer,
//   employeeForm: EmployeeFormReducer
// });
