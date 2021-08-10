import { combineReducers, createStore } from 'redux';
import HomeReducer from './reducers/HomeReducer';

const reducers = combineReducers({
  Home: HomeReducer,
});
const Store = createStore(reducers);
export default Store;
