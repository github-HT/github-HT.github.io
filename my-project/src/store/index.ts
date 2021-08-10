import {combineReducers, createStore} from 'redux';
import StylesReducer from './reducers/homeReducer';
const reducers = combineReducers({
  home: StylesReducer,
});
const store = createStore(reducers);
export default store;