import React from 'react';
import img from '../../assets/ford-g031649af7_1920.jpg'

const Info = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-4xl uppercase font-bold">Best car parts dealer out there</h1>
                    <p className="py-6 pr-20">We sell the best in class parts out there. All the products are genuine and authentic. Come become a part of our family by joining us today. </p>
                    <button className='btn btn-primary bg-gradient-to-r from-secondary to-primary'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Info;