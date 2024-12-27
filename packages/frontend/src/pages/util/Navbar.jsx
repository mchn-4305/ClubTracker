// src/pages/util/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// import styles from './Navbar.module.css';

const Navbar = () => {
    // remove jwt on logout
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
    };

    return (
        <nav >
            <h1><Link to="/">Club<span>Tracker</span></Link></h1>
            <div >
                <Link to="/">Home</Link>
                {/* <Link to="/calendar">Calendar</Link> */}
                {/* <Link to="/members">Members</Link> */}
                {/* <Link to="/pos">P.O.S</Link> */}
            </div>
            {/* drop down button for profile settings */}
            {/* options: settings, log out, clock in (overlay: requires password) */}
            <button><img src="" alt="My Profile" /></button>
        </nav>
    );
};

export default Navbar;
