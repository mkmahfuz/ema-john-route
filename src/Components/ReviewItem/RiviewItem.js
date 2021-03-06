import React from 'react';

const RiviewItem = (props) => {
    console.log(props)
    const {name,quantity,img} = props.product;
    return (
        <div>
            <h4>Name: {name}</h4>
            <img src={img} alt=""/>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default RiviewItem;