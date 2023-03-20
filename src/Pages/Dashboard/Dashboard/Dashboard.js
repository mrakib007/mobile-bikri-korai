import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1 className='text-primary text-3xl'>My Bookings</h1>
        </div>
    );
};

export default Dashboard;