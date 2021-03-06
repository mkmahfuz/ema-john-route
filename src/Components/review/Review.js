import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import Product from '../Product/Product';
import RiviewItem from '../ReviewItem/RiviewItem';

const Review = () => {
    // create a new cart state
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        const savedData = getDatabaseCart();
        // setCart(savedData);
        const productkeys = Object.keys(savedData);

        const cartProducts = productkeys.map(key=>{
            const product = fakeData.find(pd=>pd.key === key);
            product.quantity = savedData[key]
        return product;
        });
        setCart(cartProducts);
    },[])
    return (
        <div>
            <h2>This is review</h2>
           
            <p>Products: {cart.length} </p>
            {
                cart.map(pd=><RiviewItem product={pd}></RiviewItem>)
            }
            
        </div>
    );
};

export default Review;