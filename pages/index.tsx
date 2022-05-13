import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jone Jobs</title>
        <meta name='description' content='Find j1  jobs easyly' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline'>Jone Jobs</h1>
    </div>
  );
};

export default Home;
