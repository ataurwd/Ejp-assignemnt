import HomeData from '@/components/HomeData';
import React from 'react';

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  return (
    <div className='lg:px-20 md:px-14 px-4'>
      <div >
        <h1 className="text-center mt-5 text-3xl font-semibold">Welcome To Our Website </h1>
      </div>
      <HomeData data={data } />
    </div>
  );
};

export default page;