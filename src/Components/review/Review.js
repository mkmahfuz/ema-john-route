import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';

import RiviewItem from '../ReviewItem/RiviewItem';

const Review = () => {
    // create a new cart state
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedData = getDatabaseCart();
        // setCart(savedData);
        const productkeys = Object.keys(savedData);
        //create a new array of product object,and also set a product.quantity properties
        const cartProducts = productkeys.map(key=>{
            const product = fakeData.find(pd=>pd.key === key);
            product.quantity = savedData[key]
        return product;
        });
        setCart(cartProducts);
    },[]);
    const removeProduct = (pdkey)=>{
        //console.log(pdkey +'clicked');
        const newCartProduct = cart.filter((pd)=>pd.key !== pdkey);
        console.log(newCartProduct.length);
        setCart(newCartProduct);
        removeFromDatabaseCart(pdkey); //locastorage theke remove korlam
    };
    return (
        <div>
            <h2>This is review</h2>
           
            <p>Products: {cart.length} </p>
            {
                cart.map(pd=><RiviewItem key={pd.key} product={pd} removeProduct={removeProduct}></RiviewItem>)
            }
            
        </div>
    );
};

export default Review;