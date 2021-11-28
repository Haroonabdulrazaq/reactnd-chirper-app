import { SET_AUTHED_USER } from "../actions/authedUser";

function authedUser(state='tyler_mcginnis', action){
  switch (action.type) {
    case SET_AUTHED_USER:
      return {
        ...state, ...action.id,
      }
  
    default:
      return state;
  }
}

export default authedUser;
