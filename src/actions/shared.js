import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { authedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading";

const AUTHED_ID = 'dan_abramov';
// tylermcginnis
export function handleInitialData(){

  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({users, tweets})=>{
      dispatch(receiveUsers(users))
      dispatch(receiveTweets(tweets))
      dispatch(authedUser(AUTHED_ID))
      dispatch(hideLoading())
    })
  }
}