import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gists from './reducers/gists'

export default createStore(gists, applyMiddleware(thunk));