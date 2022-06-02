import type { NextPage } from 'next';
import Head from 'next/head';
import { SearchJob } from '../components/SearchJob';
import { MyLocationBtn } from '../components/MyLocationBtn';

const Home: NextPage = () => {
  return (
    <div className='text-white'>
      <Head>
        <title>Jone Jobs</title>
        <meta name='description' content='Find j1  jobs easyly' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <SearchJob />

      <MyLocationBtn />

      <div className='absolute top-0 left-0 w-full h-full bg-slate-800 -z-10' />
    </div>
  );
};

export default Home;
