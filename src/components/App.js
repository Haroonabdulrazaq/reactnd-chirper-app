import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { handleInitialData } from "../actions/shared";
import Dashboard from './Dashboard';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';
import LoadingBar from 'react-redux-loading';


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log(this.props);
    return (
      <Router>
        <Fragment>
          <LoadingBar color="blue"/>
          <div className='container'>
            <Nav />
            {
              this.props.loading===true?
              null
              : <Routes>
                  <Route path='/' exact="true" component={Dashboard} />
                  <Route path='/new' exact="true"   component={NewTweet} />
                  <Route path='/tweet/:id' exact="true" component={TweetPage} />
              </Routes>
            }
          </div>
        </Fragment>
      </Router>
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
