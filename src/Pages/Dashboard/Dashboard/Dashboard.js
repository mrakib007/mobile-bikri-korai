import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            Welcome {user} to your dashboard
        </div>
    );
};

export default Dashboard;