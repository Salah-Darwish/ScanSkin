import {createStore,combineReducers,applyMiddleware} from 'redux'
import authReducer from './reducers/authReducer'
import { thunk } from 'redux-thunk';
import { CLEAR_REDUX_DATA } from './actions/actionTypes';
import appReducer from './reducers';

const store =createStore(
    appReducer,
 applyMiddleware(thunk))
export default store