import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='text-white'>
      <Head>
        <title>Jone Jobs</title>
        <meta name='description' content='Find j1  jobs easyly' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl text-center mt-10 font-bold'>Jone Jobs</h1>
      <div className='absolute top-0 left-0 w-full h-full bg-slate-800 -z-10' />
    </div>
  );
};

export default Home;
