import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = async data => {
        const review = {
            clientName: user.displayName,
            review: data.review,
            Rating: parseInt(data.rating)
        }

        fetch('https://quiet-wildwood-25649.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {

                toast(`Thank you for you review`)



            });

    };
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-primary shadow-lg">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Drop A Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Your Review</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Review"
                                className="input input-bordered w-full max-w-xs"
                                {...register("review", {
                                })}
                            />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Rate between 1 to 5</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Rating"
                                className="input input-bordered w-full max-w-xs"

                                {...register("rating", {
                                    required: 'Rating is Required',

                                    validate: (value) =>
                                        parseInt(value) === 1 || parseInt(value) === 2 || parseInt(value) === 3 || parseInt(value) === 4 || parseInt(value) === 5 || "Not between 1 to 5"
                                })}

                            />

                            {errors.rating && <span className="text-sm text-red-500">{errors.rating.message}</span>}

                        </div>


                        <input disabled={errors.rating} className='btn w-full max-w-xs mt-10 text-white' type="submit" value="Post Review" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default MyReview;