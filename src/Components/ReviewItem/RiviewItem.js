import React from 'react';

const RiviewItem = (props) => {
    console.log(props)
    const {name,quantity,} = props.product;
    return (
        <div>
            <h4>Name: {name}</h4>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default RiviewItem;