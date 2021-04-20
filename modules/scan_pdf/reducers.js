import { combineReducers } from 'redux';
import { slice, getDataSlice } from './features/file_upload/reducer';

export default combineReducers({
   postPdf: slice.reducer,
   getData: getDataSlice.reducer
});
