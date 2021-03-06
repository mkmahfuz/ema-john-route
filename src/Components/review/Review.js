import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';

import RiviewItem from '../ReviewItem/RiviewItem';

const Review = () => {
    // create a new cart state
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedData = getDatabaseCart();
        // setCart(savedData);
        const productkeys = Object.keys(savedData);
        //create a new array of product object,and also set a product.quantity properties
        const cartProducts = productkeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key]
            return product;
        });
        setCart(cartProducts);
    }, []);
    const removeProduct = (pdkey) => {
        //console.log(pdkey +'clicked');
        const newCartProduct = cart.filter((pd) => pd.key !== pdkey);
        console.log(newCartProduct.length);
        setCart(newCartProduct);
        removeFromDatabaseCart(pdkey); //locastorage theke remove korlam
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>{products.length}</h3> */}
                {
                    cart.map(pd => <RiviewItem key={pd.key} product={pd} removeProduct={removeProduct}></RiviewItem>)
                }
            </div>
            <div className="cart-container">
                {/* <h3>Cart: </h3>
                <h5>Order Summary: {cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>

        </div>
       
    );
};

export default Review;