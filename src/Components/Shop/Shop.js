import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
     //use another state for cart
     const [cart,setCart] = useState([]);
    //jekhane state thake shekhai eventhandler function likha valo
    const handleAddProduct = (product)=>{
        //console.log(product);
        const newCart = [...cart,product]; //product is an object, so newCart is an array of objects
        setCart(newCart);
    };
   
    return (
        <div className='shop-container'>
            <div className="product-container">
            {/* <h3>{products.length}</h3> */}
                {
                   products.map((pd,indx)=><Product key={indx} product={pd} handleAddProduct = {handleAddProduct}></Product>)                
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

export default Shop;