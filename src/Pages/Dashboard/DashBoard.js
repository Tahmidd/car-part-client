import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="drawer drawer-mobile mt-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold text-secondary'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label for="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Reviews</Link></li>
                    <li><Link to="/dashboard/profile">My Profile</Link></li>

                    <li><Link to="/dashboard/users">Make Admin</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;