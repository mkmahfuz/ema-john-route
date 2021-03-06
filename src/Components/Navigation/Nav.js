import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory here</a>
                <a href="/review2">Order Review2</a>
            </nav>
        </div>
    );
};

export default Nav;