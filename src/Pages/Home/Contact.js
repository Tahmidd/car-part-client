import React from "react";
import pic from '../../assets/ford-g031649af7_1920.jpg';


const Contact = () => {
    return (
        <div style={{
            background: `url(${pic})`
        }} className='bg-primary flex-col px-10 py-14 mb-10 '>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-primary '>
                    Contact Us
                </p>
                <h1 className='text-4xl text-primary'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                ></textarea>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Submit</button>
            </div>
        </div>
    );
};

export default Contact;