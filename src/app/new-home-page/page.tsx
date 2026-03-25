import React from 'react';
import Head from 'next/head'; // Importing the Head component from Next.js
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import NewHomeWrap from '../Component/NewHomePage/NewHomeWrap';

const page = () => {
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      <NewHomeWrap />
    </div>
  );
};

export default page;
