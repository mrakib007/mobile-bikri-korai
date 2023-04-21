import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MobileDetail from './MobileDetail'

const MobileDetails = () => {
    const mobileDetails = useLoaderData();
    const [productBooking,setProductBooking] = useState(null);
    console.log(mobileDetails);
    
    return (
        <div>
            <h1 className='text-center text-xl'>Pre Owned {mobileDetails[0].title} Phones</h1>
            <div>
                {
                    mobileDetails.map(mobile => <MobileDetail
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