import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './LoginReducer';

const AppReducers = combineReducers({
    LoginReducer
});

const rootReducer = (state, action) => AppReducers(state, action);

const Store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default Store;
