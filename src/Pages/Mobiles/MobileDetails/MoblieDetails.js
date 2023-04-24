import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MobileDetail from './MobileDetail'

const MobileDetails = () => {
    const mobileDetails = useLoaderData();
    const [productBooking,setProductBooking] = useState(null);
    console.log(mobileDetails,'mobile details');
    
    return (
        <div className='max-w-[1500px] mx-auto my-10 '>
            <h1 className='text-center text-xl my-10'>Pre Owned {mobileDetails[0].title} Phones</h1>
            <div className='flex flex-wrap -m-4'>
                {
                    mobileDetails?.map(mobile => <MobileDetail
                    key={mobile._id}
                    mobile = {mobile}
                    >
                    </MobileDetail>) 
                }
            </div>
        </div>
    );
};

export default MobileDetails;