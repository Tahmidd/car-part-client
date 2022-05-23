import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Info from './Info';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Parts></Parts>

            <BusinessSummary></BusinessSummary>
            <Review></Review>
        </div>
    );
};

export default Home;