import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>

            <h1 className='text-5xl font-bold text-red-700'>No page Found</h1>
            <br />

            <Link to ={'/'}><button className='btn btn-primary'>Home</button></Link>
            
        </div>
    );
}; 

export default ErrorPage;