import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    console.log(props.cart)
    //console.log(props.cart[4].name);
    const totalPrice = cart.reduce((total,pd)=>total+pd.price*pd.quantity,0);
    // debugger;
    
    let shipping = 0;
    if(totalPrice>100){
        shipping = 0;
    }else if (totalPrice>50){
        shipping = 5;
    }else if(totalPrice>0){
        shipping = 12.99;
    }
    const totalWithoutTax = totalPrice + shipping;
    const tax = totalPrice /10; //tax is 10%
    const orderTotal = totalWithoutTax + tax;
    return (
        <div>
            <h1>Order Summary</h1>
            <p>Items Ordered: {cart.length}</p>
            
            <p>Total Price: {totalPrice} </p>
            <p>Shipping & handling: {shipping}</p>
            <p>Total before Tax: {totalWithoutTax}</p>
            <p>Estimated Tax: {tax}</p>
            <h1>Order Total:<small> {orderTotal}</small></h1>
           <Link to='/review'>
            <button className='addbtn'>Review Your Order</button>
            </Link>

        </div>
    );
};

export default Cart;