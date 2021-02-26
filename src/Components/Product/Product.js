import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,img,stock,seller,price} = props.product;
    return (
        <div className='product'>
            <div className='product-image'><img src={img} alt=""/></div>
            <div className='product-details'>
            <p className='product-name'>{name}</p>    
            <br/>
            <p>By: {seller}</p>
            <p>Price: $ {price}</p>
            <p>Stock: {stock}</p>
            </div>                  
        </div>
    );
};

export default Product;