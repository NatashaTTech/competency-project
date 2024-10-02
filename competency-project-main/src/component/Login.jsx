import React, { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import { LoginContext } from './App';
import axios from 'axios';
// const axios = require('axios')
const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})


const Login = (props) => {
    // const [currentUser, setCurrentUser] = useContext(LoginContext)

    const [login, setLogin] = useState({ email: '', password: '' })

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // const [currentUserId, setCurrentUserId] = useState('')

    // const [cart, setCart] = useState([])

    // useEffect(() => {
    //     console.log(currentUserId, 'current user!')
    //     // api.getCart(currentUserId).then(data => console.log('the cart data ' , data))

    // }, [currentUserId])

////////////////////////
    const handleEmail = (e) => {
        const { email, value } = e.target;
        setLogin({ ...login, email: value });

    }
    const handlePass = (e) => {
        const { password, value } = e.target;
        setLogin({ ...login, password: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
        api.post('/login', {
            email: login.email,
            password: login.password
        }).then((res) => {
            console.log('Login response: ', res)
            if (res.status === 200) {
                console.log('res data: ', res.data)
                // update parent component state
                props.updateUser({
                    loggedIn: true,
                    email: res.data.email,
                    id: res.data.id,
                    cart: res.data.cart
                }) 
                // props.setLoggedIn(true)
                // props.setCurrentUser({
                //     emai: res.data.email,
                //     id: res.data._id,
                //     cart: res.data.cart
                // })
                
                navigate('/')
            }
        }).catch((err) => {
            console.log('Login error: ', err)
        })

///////////////////////
        // api.loginUser(login).then(data => {
        //     console.log('data: ', data.data)
        //     // console.log('the login id: ', data.data._id)
        //     // currentUser(data.data._id)
        //     // const { email, value } =  data.data.email;
        //     setCurrentUser({...currentUser, email: data.data.email, id: data.data._id}); 
        //     // console.log('login user: ' + currentUser.email)
        //     return data.data._id; 
        // }).then(id => {
        //     console.log('got id ', id)
        //     api.getCart(id).then(data => {
        //         console.log('the cart data ', data.data)
        //         setCurrentUser({...currentUser, cart: data.data});
        //         console.log(currentUser,' current user cart')
        //         return currentUser;
        //     })
        //     // .then(data => {
        //         //     console.log('cart data here: ', data)
        //         //     setCart[data]
        //         // })
        //     })
        //     // console.log('current user is: ', cart)
        //     // console.log('cart items: ', cart)


        //     console.log(currentUser, ": user data")
        // // setIsLoggedIn(true)
        // console.log('Thanks for logging in ' + login.email)
        // setCurrentUserId(login._id)
        // console.log(currentUserId)
        // setLogin(login) 
        // console.log('context ' + LoginContext)
    }

    return (

        <div id='login-form' className='bg-dark rounded text-light col-11 col-sm-9 col-md-6 col-lg-7 col-xl-5 mx-auto px-3 py-4 mt-5'>
            <h3 className='text-center py-2'>Login to your Account</h3>
            <Form 
            onSubmit={(event) => {
                event.preventDefault()
                handleSubmit();
            }} 
            className='p-2 text-center col-md-8 mx-auto'>
                <Form.Group controlId="newEmail">
                    <Form.Control type="email" value={login.email} onChange={handleEmail} placeholder="Your Email" className="text-center my-2" required />
                </Form.Group>

                <Form.Group controlId="newPassword">
                    <Form.Control type="password" value={login.password} onChange={handlePass} placeholder="Your Password" className="text-center my-2" required />
                </Form.Group>
                <Button variant="danger" onClick={handleSubmit} type="submit" className="mt-3 mx-1">Login</Button>
                {/* <Button variant="warning" className="mt-3 mx-1" onClick={() => logOut()}>Log Out</Button> */}
            </Form>
            <div className="text-center d-flex justify-content-center align-items-center flex-wrap">
                <div>Don't Have an Account Yet? &nbsp;&nbsp;</div>
                <Link to='/register' className="text-center d-block mb-3">
                    <Button variant="success" type="submit" className="mt-3 mx-1">Sign Up!</Button>
                </Link>
            </div>
        </div>
    )
}

export default Login;