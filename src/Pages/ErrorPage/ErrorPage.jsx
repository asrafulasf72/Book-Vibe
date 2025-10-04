import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
             <div className='flex-col items-center text-center'>
                <h1 className='text-6xl font-bold text-black'>404</h1>
                <p>Page Not Found</p>
             </div>
        </div>
    );
};

export default ErrorPage;