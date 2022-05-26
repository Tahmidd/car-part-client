import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        const profile = {
            clientName: user.displayName,
            address: data.address,
            number: data.number,

        }

        fetch('https://quiet-wildwood-25649.herokuapp.com/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {

                toast(`Submitted`)



            });
    };

    return (
        <div className='mt-5'>
            <h2 className='text-2xl font-bold '>Name: {user.displayName}</h2>
            <h2 className='text-2xl font-bold '>Email: {user.email}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-secondary">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {

                        })}
                    />

                    <label className="label">
                        <span className="label-text text-secondary">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Number"
                        className="input input-bordered w-full max-w-xs"
                        {...register("number", {

                        })}
                    />
                    <input className='btn w-full mt-10 max-w-xs text-white' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;