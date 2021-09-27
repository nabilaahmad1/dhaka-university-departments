import React from 'react';
import './Header.css';
import logo from './images/favicon.png';

const Header = () => {
    return (
        <div className="Header">
            {/* logo  */}
            <img src={logo} alt="university logo" className="logo" />
            <h1>Dhaka University</h1>
            <h2>All Departments Annual Research Budget</h2>
            <h3>Total Research Budget: 10000000</h3>
        </div>
    );
};

export default Header;