import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const [user] = useAuthState(auth);
    const { _id, name, min_quantity, avail_quantity, price } = purchase;


    const handleBooking = event => {
        event.preventDefault();

    }

    return (
        <div>
            <input type="checkbox" id="purchase-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="purchase-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Purchasing: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3  mt-2'>

                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <p>Min: </p>
                        <input type="text" name="min-quan" disabled value={min_quantity || ''} className="input input-bordered w-full max-w-xs" />

                        <p>Available:</p>
                        <input type="text" name="avail-quan" disabled value={avail_quantity || ''} className="input input-bordered w-full max-w-xs" />
                        <p>Price:</p>
                        <input type="text" name="price" disabled value={price || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;