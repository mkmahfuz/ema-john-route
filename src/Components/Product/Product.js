import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'
const Product = (props) => {
    const { name, img, stock, seller, price, key} = props.product;
    //console.log(props);
    return (
        <div className='product'>
            <div className='product-image'><img src={img} alt="" /></div>
            <div className='product-details'>
                <p className='product-name'><Link to={'/product/' + key}>{name}</Link> </p>
                <br />
                <p>By: {seller}</p>
                <p>Price: $ {price}</p>
                <p>Stock: {stock}</p>
                {props.showbutton && <button className='addbtn' onClick={() => props.handleAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
                }
            </div>
        </div>
    );
};

export default Product;