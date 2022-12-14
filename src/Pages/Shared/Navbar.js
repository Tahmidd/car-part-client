import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';



const Navbar = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };


    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/about">Portfolio</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }


        {/* <li><Link to="/login">Login</Link></li> */}

    </>
    return (
        <div className="navbar text-white bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Car Part Point</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}

                </ul>
            </div>
            <div className="navbar-end">
                <ul className='px-5'>
                    {
                        user && <p className='text-center'>User: {user.displayName}</p>
                    }

                    {user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}

                </ul>
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;