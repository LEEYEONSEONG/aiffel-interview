import { combineReducers } from 'redux';

import auth from './auth';
import forum from './forum';

const rootReducer = combineReducers({
  auth,
  forum,
});

export default rootReducer;
