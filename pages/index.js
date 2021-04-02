import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Home = ({ router }) => {
   React.useEffect(() => {
      router.push('/search');
   });
   return null;
};

export default withRouter(Home);
