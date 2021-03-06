import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    //use another state for cart
    const [cart, setCart] = useState([]);
    //jekhane state thake shekhai eventhandler function likha valo
    const handleAddProduct = (product) => {
        //console.log(product);
        let sameProduct = cart.find((pd) => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter((pd)=>pd.key !== product.key);
            newCart = [...others,sameProduct];
            // newCart = [...cart,sameProduct];
        } else {
            //sameProduct = [...cart,product];
            product.quantity = count;
            newCart = [...cart,product];

        }
        //new cart start
        // const newCart = [...cart, sameProduct]; //product is an object, so newCart is an array of objects
        // console.log(newCart);
       setCart(newCart);

        //new cart end


        // const newCart = [...cart,product]; //product is an object, so newCart is an array of objects
        // setCart(newCart);
        // const sameproduct = newCart.filter((pd)=>pd.key===product.key); 
        // const count = sameproduct.length;
        addToDatabaseCart(product.key, count)
    };

    return (
        <div className='shop-container'>
            <div className="product-container">
                {/* <h3>{products.length}</h3> */}
                {
                    products.map((pd, indx) => <Product showbutton={true} key={pd.key} product={pd} handleAddProduct={handleAddProduct}></Product>)
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