import { createAction, createSlice } from '@reduxjs/toolkit';

const initialState = {};

const slice = createSlice({
   name: 'upload',
   initialState,
   reducers: {},
   extraReducers: {}
});

export const example_action = createAction('EXAMPLE_ACTION');

export default slice.reducer;
