import { combineReducers } from 'redux';
import upload_file_reducer from '@scan_pdf/reducers';

export default combineReducers({
   scan_pdf: upload_file_reducer
});
