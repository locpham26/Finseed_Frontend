import axios from 'axios';
import { DOMAIN } from 'constants';
import { createAction } from 'redux-actions';

export const asyncScanPdf = (type) => {
   const TYPE_START = `${type}_START`;
   const TYPE_SUCCESS = `${type}_SUCCESS`;
   const TYPE_FAILURE = `${type}_FAILURE`;

   const actions = {
      [TYPE_START]: createAction(TYPE_START, () => false),
      [TYPE_SUCCESS]: createAction(TYPE_SUCCESS, (input, response) => ({ response: response.data })),
      [TYPE_FAILURE]: createAction(TYPE_FAILURE, (input, error) => ({ error: error.message }))
   };

   const thunkAction = (input) => async (dispatch) => {
      dispatch(actions[TYPE_START](input));
      const form = new FormData();
      form.append('file', input);

      return axios
         .post(`${DOMAIN}/api/v1/scan_file`, form, {
            headers: { 'Content-Type': '*', 'Access-Control-Allow-Origin': '*' }
         })
         .then((response) => {
            dispatch(actions[TYPE_SUCCESS](input, response));
            return response;
         })
         .catch((error) => {
            dispatch(actions[TYPE_FAILURE](input, error));
            return { error };
         });
   };
   thunkAction.START = actions[TYPE_START].toString();
   thunkAction.SUCCESS = actions[TYPE_SUCCESS].toString();
   thunkAction.FAILURE = actions[TYPE_FAILURE].toString();

   return thunkAction;
};

export const asyncGetData = (type) => {
   const TYPE_START = `${type}_START`;
   const TYPE_SUCCESS = `${type}_SUCCESS`;
   const TYPE_FAILURE = `${type}_FAILURE`;

   const actions = {
      [TYPE_START]: createAction(TYPE_START, () => false),
      [TYPE_SUCCESS]: createAction(TYPE_SUCCESS, (input, response) => ({ response: response.data })),
      [TYPE_FAILURE]: createAction(TYPE_FAILURE, (input, error) => ({ error: error.message }))
   };

   const thunkAction = (input) => async (dispatch) => {
      dispatch(actions[TYPE_START](input));

      return axios
         .get(`${DOMAIN}/api/v1/result/${input}`, {
            headers: { 'Content-Type': '*', 'Access-Control-Allow-Origin': '*' }
         })
         .then((response) => {
            dispatch(actions[TYPE_SUCCESS](input, response));
            return response;
         })
         .catch((error) => {
            dispatch(actions[TYPE_FAILURE](input, error));
            return { error };
         });
   };
   thunkAction.START = actions[TYPE_START].toString();
   thunkAction.SUCCESS = actions[TYPE_SUCCESS].toString();
   thunkAction.FAILURE = actions[TYPE_FAILURE].toString();

   return thunkAction;
};
