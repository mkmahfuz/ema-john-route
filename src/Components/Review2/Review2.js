import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import RiviewItem from '../ReviewItem/RiviewItem';

const Review2 = () => {
const [cart,setCart] = useState([]);
const [productCount,setProductCount] = useState([]);
    useEffect(()=>{
        const savedCart = getDatabaseCart(); //savedCart is an Object {productkey,count}
        //console.log(savedCart);
        const productKeys = Object.keys(savedCart); //productkeys array
        //console.log(productKeys);
        const productCounts = Object.values(savedCart);
        const totalProducts = productCounts.reduce((total,value)=>total + value,0);
        // console.log(productCounts);
        // console.log(totalProducts)
        

        //find product object from savedCart array
        const cartproduct = productKeys.map((pdkey)=>{
            const product = fakeData.find((pd)=>pd.key === pdkey);
            product.quantity = savedCart[pdkey]; //add quantity property to each product object
            return product; //return product object
                   });

                   setCart(cartproduct);
                   setProductCount(totalProducts);
    },[]);

    return (
        <div>
            <h1>This is order review2</h1>
            <h2>Total products Count: {productCount}</h2>
            {
                cart.map(pd=><RiviewItem key={pd.key} product={pd}></RiviewItem>)
            }
        </div>
    );
};

export default Review2;