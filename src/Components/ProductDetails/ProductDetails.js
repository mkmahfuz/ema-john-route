import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {pdkey} = useParams();
    console.log(pdkey)
    const product = fakeData.find(pd=>pd.key === pdkey);
    return (
        <div>
            <h1>Your product {pdkey} details</h1>
            
            {/* <p>{console.log(product)}</p> */}
            <Product showbutton = {false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;