import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {
    const {LogOut} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        LogOut()
        .then(()=>{
            navigate('/login');
        })
        .catch(error => console.log(error));
    }
    return (
        <div>
            <p className='text-red-600'>Something went wrong</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <h3 className='text-4xl'>Please <button onClick={handleLogOut}>Sign Out and Log Back in to continue.</button></h3>
        </div>
    );
};

export default DisplayError;