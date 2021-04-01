/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './reducer';

let store;

const isProd = process.env.APP_ENV === 'production';

const initStore = (reduxToolkitStoreOptions) =>
   configureStore({
      reducer,
      devTools: !isProd,
      ...reduxToolkitStoreOptions
   });

export const initializeStore = (preloadedState) => {
   let _store = store ?? initStore({ preloadedState });

   // After navigating to a page with an initial Redux state, merge that state
   // with the current state in the store, and create a new store
   if (preloadedState && store) {
      _store = initStore({
         ...store.getState(),
         ...preloadedState
      });
      // Reset the current store
      store = undefined;
   }

   // For SSG and SSR always create a new store
   if (typeof window === 'undefined') return _store;
   // Create the store once in the client
   if (!store) store = _store;

   return _store;
};

export const useStore = (initialState) => {
   const store = useMemo(() => initializeStore(initialState), [initialState]);
   return store;
};

export const wrapper = createWrapper(initStore);
