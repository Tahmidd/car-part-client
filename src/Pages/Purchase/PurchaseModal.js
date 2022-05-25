import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { async } from '@firebase/util';
import { toast } from 'react-toastify';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const [user] = useAuthState(auth);
    const { _id, name, min_quantity, avail_quantity, price } = purchase;
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = async e => {
        const purchase = {
            purchaseId: _id,
            purchase: name,
            client: user.email,
            clientName: user.displayName,
            price,
            quantity: parseInt(e.quantity)
        }

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Purchase Successful`)
                }
                else {
                    toast.error(`Already Purchased`)
                }

            });


    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Purchasing: {name}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3  mt-2'>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <p>Min: </p>
                        <input type="text" name="min-quan" disabled value={min_quantity || ''} className="input input-bordered w-full max-w-xs" />

                        <p>Available:</p>
                        <input type="text" name="avail-quan" disabled value={avail_quantity || ''} className="input input-bordered w-full max-w-xs" />
                        <p>Price:</p>
                        <input type="text" name="price" disabled value={price || ''} className="input input-bordered w-full max-w-xs" />

                        <input
                            type="text"
                            placeholder="Quantity"
                            className="input input-bordered w-full max-w-xs"

                            {...register("quantity", {
                                required: 'Quantity is Required',

                                validate: (value) =>
                                    parseInt(value) >= parseInt(min_quantity) && parseInt(value) <= parseInt(avail_quantity) || "Quantity is invalid"
                            })}

                        />

                        {errors.quantity && <span className="text-sm text-red-500">{errors.quantity.message}</span>}



                        <input
                            type="text"
                            placeholder="Phone Number"
                            className="input input-bordered w-full max-w-xs"

                            {...register("phone")}
                        />

                        < input disabled={errors.quantity} type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;