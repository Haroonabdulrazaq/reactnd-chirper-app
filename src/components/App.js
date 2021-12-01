import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from "../actions/shared";
// import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <LoadingBar color="blue"/>
        {
          this.props.loading===true?
          null
          : <NewTweet/>
        }
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  console.log(authedUser);
  return {
    loading: authedUser === null,
  }
}
export default connect(mapStateToProps)(App);
