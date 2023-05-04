import React from 'react';
import errorpage from '../../assets/images/errorpage.avif';

const ErrorPage = () => {
    return (
        <div>
            <img src={errorpage} className='w-1/2 mx-auto lg:h-screen' alt="" />
        </div>
    );
};

export default ErrorPage;