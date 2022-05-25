import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddParts = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async data => {
        toast("successfully added");
        console.log(data);
        const url = `http://localhost:5000/part`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div className='flex mt-5 justify-center items-center '>
            <div className="card w-96 bg-primary shadow-lg">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Part Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Part name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Part Description</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Part Description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Minimum Quantity</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Minimum Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("min_quantity", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Available Quantity</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full max-w-xs"
                                {...register("avail_quantity", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: true
                                })}
                            />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-white">Image Link</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Image link"
                                className="input input-bordered w-full max-w-xs"
                                {...register("img", {
                                    required: true
                                })}
                            />

                        </div>




                        <input className='btn w-full max-w-xs mt-10 text-white' type="submit" value="Add Product" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default AddParts;