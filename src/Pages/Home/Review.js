import React from 'react';

const Review = ({ view }) => {
    const { clientName, review, Rating } = view;
    return (
        <div>
            <div className=" card text-white bg-gradient-to-r from-secondary to-primary shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {clientName}</h2>
                    <p>Review: {review}</p>
                    <p>Ratings: {Rating} star</p>
                </div>

            </div>
        </div>
    );
};

export default Review;