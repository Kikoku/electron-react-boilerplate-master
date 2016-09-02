import { combineReducers } from 'redux';
import fileUpload from '../modules/FileUpload/reducers';


const rootReducer = combineReducers({
  fileUpload
})

export default rootReducer;
