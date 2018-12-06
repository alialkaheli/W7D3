import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import logger from 'redux-logger';

const configureStore = () => createStore(rootReducer, applyMiddleware(logger));
