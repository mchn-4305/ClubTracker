// src/pages/util/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // remove jwt on logout
    const handleLogout = () => {
        localStorage.removeItem('jwtToken');
    };

    return (
        <nav >
            <h1><Link to="/home">Club<span>Tracker</span></Link></h1>
            <div >
                <Link to="/calendar">Calendar</Link>
                <Link to="/calendar">Members</Link>
                <Link to="/calendar">Employees</Link>
                <Link onClick={handleLogout} to="/login">Log Out</Link>
            </div>
        </nav>
    );
};

export default Navbar;
