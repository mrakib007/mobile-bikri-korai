import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
    const navigation = useNavigation();
    const booking = useLoaderData();
    if(navigation.state === 'loading'){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-3xl'>Payment For {booking.productBooking}</h3>
            <p className='text-xl'>Please Pay <strong>{booking.price} tk.</strong></p>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom booking={booking}/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;