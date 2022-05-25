import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='mb-20'>
                <h2 className='text-3xl font-bold text-center text-secondary my-5'>Available Reviews</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        reviews.map(view => <Review
                            key={view._id}
                            view={view}
                        >

                        </Review>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;