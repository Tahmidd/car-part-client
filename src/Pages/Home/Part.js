import React from 'react';

const Part = ({ part }) => {
    const { id, name, description, min_quantity, avail_quantity, price, img
    } = part;
    return (
        <div>
            <div className=" card text-white bg-gradient-to-r from-secondary to-primary shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl md:flex" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Quantity: {min_quantity}</p>
                    <p>Available Quantity: {avail_quantity}</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions">
                        <button className="btn btn-secondary border-2 shadow-md">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Part;