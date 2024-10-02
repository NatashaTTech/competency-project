import React, { useState, useContext, useEffect } from 'react';
// import { LoginContext } from './App';
import CartItem from './CartItem';
import { CartContext } from './App'

const Cart = (props) => {

    const { currentCart } = useContext(CartContext)

    // const [currentUser, setCurrentUser] = useContext(LoginContext)
    console.log('this is me ', props.currentUser)

    // // tracks cart status
    const [cart, setCart] = useState(currentCart);
    
    // setCart(props.currentUser.cart)

    //     console.log(cart, 'current user!')

    // useEffect(() => {
    //     setCart(...cart, currentUser.cart)
    //      , []})
    // console.log(currentUser._currentValue.cart)

    return (
        <div>
            <div className="text-center h3 fw-light text-light py-4 mb-3">My Shopping Cart</div>
            {cart && cart.length > 0 ?
                (cart.map((item, i) =>
                    <CartItem key={i} name={item[0]} price={item[1]} image={item[2]} />
                )) : <h5 className="text-center text-light fw-light pt-2 lh-lg">There are no items in your cart. &nbsp;🛒<br />Click Shop Animals to find something you like.</h5>
            }
        </div>
    )
}

export default Cart;