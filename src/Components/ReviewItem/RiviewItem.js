import React from 'react';

const RiviewItem = (props) => {
    // console.log(props)
    const {name,quantity,img,key,price} = props.product;
    // console.log(key)
    return (
        <div>
            <h4>Name: {name}</h4>
            <h6>Price: {price}</h6>
            <img src={img} alt=""/>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>props.removeProduct(key)}>Remove</button>
        </div>
    );
};

export default RiviewItem;