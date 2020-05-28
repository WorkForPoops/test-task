import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReduser } from 'redux-form';

let rootReducer = combineReducers({
    auth: authReducer,
    form: formReduser,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store