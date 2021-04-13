import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { asyncScanActions } from '@util/utilScan';

const initialState = {
   getDownload: {},
   postPdf: {}
};

export const postPdf = asyncScanActions('PDF_POST_FILE');

const slice = createSlice({
   name: 'upload',
   initialState,
   reducers: {},
   extraReducers: {
      [postPdf.START]: (state, { payload, meta }) => {
         return {
            status: 'started'
         };
      },
      [postPdf.SUCCESS]: (state, { payload, meta }) => {
         return {
            status: 'success',
            data: payload.response
         };
      },
      [postPdf.FAILURE]: (state, { payload, meta }) => {
         return {
            status: 'fail',
            error: payload
         };
      }
   }
});

export default slice.reducer;
