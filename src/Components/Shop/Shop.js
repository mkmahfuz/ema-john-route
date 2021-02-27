import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);
    //jekhane state thake shekhai eventhandler function likha valo
    const handleAddProduct = (product)=>{
        console.log(product);
    };
    
    return (
        <div className='shop-container'>
            <div className="product-container">
            {/* <h3>{products.length}</h3> */}
                {
                   products.map((pd)=><Product product={pd} handleAddProduct = {handleAddProduct}></Product>)                
                }                
            </div>
            <div className="cart-container">
                <h3>Cart: </h3>
            </div>
            
        </div>
    );
};

export default Shop;