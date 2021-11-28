import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App';
import middleware from './middlewares';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import rootReducer from './reducers'


const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
document.getElementById('root'))