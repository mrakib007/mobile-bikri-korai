import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const MyBookings = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings',user?.email],
        queryFn: async () => {
            const res = await fetch(url
            //     ,{
            //     headers: {
            //         authorization: `bearer ${localStorage.getItem('accessToken')}`
            //     }
            // }
            );
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div className='lg:mr-28'>
            <h1>My Orders</h1>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings && 
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i+1}</th>
                                <td className=''><img className='w-10' src={booking.image_url} alt =""></img></td>
                                <td>{booking.productBooking}</td>
                                <td>{booking.price} tk</td>

                                <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                        to={`dashboard/payment/${booking._id}`}>
                                            <button className='btn-sm btn-primary'>
                                                Pay
                                            </button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span> 
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;