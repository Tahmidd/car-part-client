import React from 'react';
import useParts from '../../hooks/useParts';

const Manage = () => {
    const [parts, setParts] = useParts();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/part/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = parts.filter(part => part._id !== id);
                    setParts(remaining);
                })

        }
    }

    return (
        <div>
            <div className='mt-5'>
                <h2>My Orders: {parts.length}</h2>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-full">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Minimun Quantity</th>
                                <th>Price</th>
                                <th>Purchase</th>
                                {/* <th>Payment</th> */}
                                <th>Cancel Order</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                parts.map(a => <tr>

                                    <td>{a.name}</td>
                                    <td>{a.min_quantity}</td>
                                    <td>{a.price}</td>
                                    <td>{a.purchase}</td>
                                    <td>


                                        <div>
                                            <button onClick={() => handleDelete(a._id)} className='btn btn-error'>Delete</button>
                                        </div >

                                    </td>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default Manage;