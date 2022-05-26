import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?client=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setOrders(data));

        }
    }, [user]);

    const handleDelete = id => {
        const url = `http://localhost:5000/purchase/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = orders.filter(purchase => purchase._id !== id);
                setOrders(remaining);
            })
    }

    return (
        <div className='mt-5'>
            <h2>My Orders: {orders.length}</h2>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Purchase</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(a => <tr>

                                <td>{a.clientName}</td>
                                <td>{a.quantity}</td>
                                <td>{a.price}</td>
                                <td>{a.purchase}</td>
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p>
                                    </div>}</td>
                                <td>
                                    {/* <button onClick={() => handleDelete(a._id)} className='btn btn-danger'>Delete</button> */}
                                    <label for="delete-confirm-modal" class="btn btn-xs btn-error">Cancel</label>

                                    <div>
                                        <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
                                        <div class="modal modal-bottom sm:modal-middle">
                                            <div class="modal-box">
                                                <h3 class="font-bold text-lg text-red-500">Are you sure you want to Cancel your Order !</h3>

                                                <div class="modal-action">
                                                    <button onClick={() => handleDelete(a._id)} class="btn btn-xs btn-error">Delete</button>
                                                    <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div >

                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyOrders;