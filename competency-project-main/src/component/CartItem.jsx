import React from 'react';


const CartItem = ({ name, price, image }) => {


    return (
        <div className="cartItem ui inverted segment d-flex col-7 mx-auto align-items-center p-3 m-3">
            <div className="col-2 ">
                <img src={image} alt="image" className="cartItemImg"/>
            </div>
            <div className="text-light text-center fw-light h4 offset-1 col-6">{name}</div>
            <div className="text-light text-end col-2">{price}</div>
        </div>
    )
}

export default CartItem;