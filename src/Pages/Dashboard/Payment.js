import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1xftFvsF78ZwOI1Bg534oQdvHfZW8sppIroo86kkLVICV3ZbMV8PHJ7iwDjzM9ULx1Zd8UQkfxrUALYbYL6EA900h28xcDl2');

const Payment = () => {
    const { id } = useParams();
    const url = `https://quiet-wildwood-25649.herokuapp.com/purchase/${id}`;

    const { data: part, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    const pay = part.price * part.quantity;

    return (
        <div className='text-center'>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-error font-bold">Hello, {part.clientName}</p>
                    <h2 class="text-center font-bold text-2xl">Please Pay for {part.purchase}</h2>

                    <p>Please pay: ${pay} for {part.quantity} pieces</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm part={part} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;