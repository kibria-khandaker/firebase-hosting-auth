import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const MyMenuBar = () => {
    return (
        <div className='nav-area'>
            <div className='nav-logo'>
                <Link to="/">Logo</Link>
            </div>
            <div className="nav-list">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default MyMenuBar;