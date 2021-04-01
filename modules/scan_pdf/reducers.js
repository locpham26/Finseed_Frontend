import { combineReducers } from 'redux';
import file_update_slice from './features/file_upload/reducer';

export default combineReducers({
   file_upload: file_update_slice
});
