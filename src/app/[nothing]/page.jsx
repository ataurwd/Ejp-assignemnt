import React from 'react';

const page = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.nothing}`)
    const data = await res.json();
    return (
        <div className='grid place-items-center mt-5'>
            <h1 className='text-xl'>{data.title}</h1>
            <p>{ data.body}</p>
        </div>
    );
};

export default page;