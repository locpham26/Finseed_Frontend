import { combineReducers } from 'redux';
import upload_file_reducer from '@scan_pdf/reducers';

export default combineReducers({
   scanPdf: upload_file_reducer
});
