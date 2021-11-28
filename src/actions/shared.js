import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { authedUser } from "./authedUser";

const AUTHED_ID = 'tylermcginnis';
// tylermcginnis
export function handleInitialData(){

  return (dispatch) => {
    return getInitialData()
      .then(({users, tweets})=>{
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(authedUser(AUTHED_ID))
      })
  }
}