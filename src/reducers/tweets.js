import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../actions/tweets";

function tweets(state={}, action){
  switch (action.type) {
    case ADD_TWEET:
      const {tweet} = action
      let replyingTo = {}
    console.log("HellState...", state);
     if(tweet.replyingTo !== null) {
      replyingTo = {
        [tweet.replyingTo]: {
          ...state[tweet.replyingTo],
          replies: state[tweet.replyingTo].replies.concat([tweet.id])
        }
      }
     }
    
      return {
        ...state, 
        [tweet.id]: tweet,
        ...replyingTo
      }
    case RECEIVE_TWEETS:
      return {
        ...state, ...action.tweets,
      }
    case TOGGLE_TWEET: 
    return {
      ...state,
      [action.id]: {
        ...state[action.id],
        likes: action.hasLiked ===true 
          ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
          : state[action.id].likes.concat([action.authedUser])
      }
    }
    default:
      return state;
  }
}

export default tweets;
