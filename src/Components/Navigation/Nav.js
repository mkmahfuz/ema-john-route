import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Nav;