export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function authedUser(id) {
  return ()=>{
    return {
      type: SET_AUTHED_USER,
      id,
    }
  }
}