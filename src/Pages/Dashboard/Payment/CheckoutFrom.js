import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
const CheckoutFrom = ({booking}) => {
    const [clientSecret,setClientSecret] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');
    const [success,setSuccess] = useState('');
    const [cardError,setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {price,email,name,_id} = booking;

    useEffect(()=>{
        //Create paymentIntent as soon as the page loads
        fetch('http://localhost:5000/create-payment-intent',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price}),
        })
        .then((res)=>res.json())
        .then((data)=>(data.clientSecret));
    },[price])

    const handleSubmit = () =>{

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style:{
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder':{
                            color: '#aab7c4',
                        },
                    },
                    invalid:{
                        color: '#9e2146',
                    },
                },
            }}/>
            <button className='btn btn-sm mt-4 btn-secondary' 
            type='submit'
            disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
        <p className='text-red-500'>{cardError}</p>
        {
            success && <div>
                <p className='text-green-500'>{success}</p>
                <p>Your Transaction Id is: <span className='font-bold'>{transactionId}</span></p>
            </div>
        }
        </>
    );
};

export default CheckoutFrom;