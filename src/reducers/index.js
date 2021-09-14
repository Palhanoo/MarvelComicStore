import { combineReducers } from 'redux';
import ComicReducer from './ComicReducer';

export default combineReducers({
   comics: ComicReducer 
})