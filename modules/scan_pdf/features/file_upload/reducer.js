import { createSlice } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { asyncGetData, asyncScanPdf } from '@util/utilScan';

const initialState = {
   getDownload: {},
   postPdf: {}
};

export const postPdf = asyncScanPdf('PDF_POST_FILE');

export const slice = createSlice({
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

export const getData = asyncGetData('GET_DATA');

export const getDataSlice = createSlice({
   name: 'getData',
   initialState,
   reducers: {},
   extraReducers: {
      [getData.START]: (state, { payload, meta }) => {
         return {
            status: 'started'
         };
      },
      [getData.SUCCESS]: (state, { payload, meta }) => {
         return {
            status: 'success',
            data: payload.response.data,
            message: payload.response.message
         };
      },
      [getData.FAILURE]: (state, { payload, meta }) => {
         return {
            status: 'fail',
            message: payload.response.message
         };
      }
   }
});

export default slice.reducer;
