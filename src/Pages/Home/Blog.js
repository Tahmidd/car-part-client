import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <div >
                <h1 className='font-bold'>1. How will you improve the performance of a React Application?</h1>
                <h1>Ans: * Making meaningful components.
                    <br />
                    * Making it responsive for differenct devices
                    <br />
                    * Using the production build
                </h1>
            </div>
            <div className='mt-5'>
                <h1 className='font-bold'>2. What are the different ways to manage a state in a React application?</h1>
                <h1>Ans: There are four types of states that we can manage differently.
                    <br />
                    1. Local State:  Local state is data we manage in one or another component.
                    <br />
                    2. Global State: Global state is data we manage across multiple components.
                    <br />
                    3. Server State: Data that comes from an external server that must be integrated with our UI state.
                    <br />
                    4. URL State: Data that exists on our URLs, including the pathname and query parameters.
                </h1>

            </div>
            <div className='mt-5'>
                <h1 className='font-bold'>3. How does prototypical inheritance work?</h1>
                <h1>Ans: It is a feature in javascript that is used to add  methods and properties in objects. An object can inherit the properties and methods of another object using this feature. </h1>

            </div>

            <div className='mt-5'>
                <h1 className='font-bold'>4. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <h1>Ans: The way to implement a search is by declaring a state and a event. In the event we will search for the text that we input using target.value. When the value matches we will map the component of the declared state and in it we will show the found results.</h1>

            </div>
            <div className='mt-5'>
                <h1 className='font-bold'>5. What is a unit test? Why should write unit tests?</h1>
                <h1>Ans: A unit test is a way to test a unit, the smallest code in a system that can logically be isolated. Unit tests are typically automated tests written and run by software developers. Unit testing ensures that all code meets quality standards before it's deployed.</h1>

            </div>
        </div>
    );
};

export default Blog;