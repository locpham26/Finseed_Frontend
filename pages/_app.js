import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import { useStore } from '../store';

function MyApp({ Component, pageProps }) {
   const store = useStore(pageProps.initialReduxState);

   return (
      <>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
            />
         </Head>
         <Provider store={store}>
            <Component {...pageProps} />
         </Provider>
      </>
   );
}

export default MyApp;
