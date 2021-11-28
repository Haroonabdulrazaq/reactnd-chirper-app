import { combineReducers } from 'redux';
import tweets from "./tweets";
import users from "./users";
import authedUser from "./authedUser";

const rootReducer = combineReducers({
  tweets,
  users,
  authedUser,
})

export default rootReducer;
