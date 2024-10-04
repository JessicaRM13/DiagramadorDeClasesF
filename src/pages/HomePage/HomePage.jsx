import React from 'react';
import { Header } from './Header';
import { HomeBoardScreen } from './HomeBoardScreen';

export const HomePage = () => {
  return (
    <div className='grid justify-items-center h-screen pt-0 bg-[#80B4CAFF]'>
      <div className='w-3/4 border border-[#06031EFF] rounded-lg'>
        <div>
          <Header />
        </div>
        <div className='border-solid border border-[#0E072BFF] h-5/6 rounded-lg text-white'>
          <HomeBoardScreen />
        </div>
      </div>
    </div>
  );
}
