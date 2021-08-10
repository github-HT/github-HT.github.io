import {combineReducers, createStore} from 'redux';
import {homeReducer} from './reducers/homeReducer';
const reducers = combineReducers({
  home: homeReducer,
});
const store = createStore(reducers);
export default store;