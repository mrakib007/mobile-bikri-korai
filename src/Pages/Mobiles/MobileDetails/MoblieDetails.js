import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MobileDetails = () => {
    const mobileDetails = useLoaderData();
    const [productBooking,setProductBooking] = useState(null);
    
    return (
        <div>
            
        </div>
    );
};

export default MobileDetails;