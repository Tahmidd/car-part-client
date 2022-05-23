import React from 'react';
import banner1 from '../../../src/assets/garage-g7f763d2d2_1920.jpg';
import banner2 from '../../../src/assets/things-g6af4ca872_1920.jpg';

const Banner = () => {
    return (
        <div className='mt-6'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner1} alt='' className="" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner2} alt='' className="" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs btn-primary">1</a>
                <a href="#item2" className="btn btn-xs btn-secondary">2</a>
            </div>
        </div>
    );
};

export default Banner;