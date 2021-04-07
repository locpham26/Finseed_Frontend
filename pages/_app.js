import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/config/theme/default';
import TheHeader from '@core/TheHeader';
import GlobalStyles from 'styles/globalStyles';
import { useStore } from '../store';
import 'antd/dist/antd.css';

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
            <ThemeProvider theme={theme}>
               <GlobalStyles />
               <TheHeader />
               <Component {...pageProps} />
            </ThemeProvider>
         </Provider>
      </>
   );
}

export default MyApp;
