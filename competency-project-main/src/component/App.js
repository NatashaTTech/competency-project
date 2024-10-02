import React, { useState, useEffect, createContext, useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes, Route, Link, useParams
} from 'react-router-dom';

import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})
import { Container } from 'react-bootstrap';

import Header from './Header'; 
import TopNav from './TopNav';
import Slideshow from './Carousel';
import About from './About';
import Shop from './Shop';
import Login from './Login'
import RegistrationForm from './RegistrationForm';
import Cart from './Cart';
import Footer from './Footer';
import '../app.css';

export const CartContext = createContext();

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    
    const updateUser = (userObj) => {
        setLoggedIn(userObj.loggedIn)
        setCurrentUser({
            email: userObj.email,
            id: userObj.id,
            cart: userObj.cart
        })
    }
    const updateCart = (cartObj) => {
        setCurrentUser({
            ...currentUser,
            cart: cartObj
            // cart.concat(cartObj)
        })
        // console.log('current user after updateCart: ', currentUser)
    }
    // get user on page load 
    useEffect(() => {
        grabUser();
        // let currentCart = currentUser.cart;
    }, []);
    
    useEffect(() => {
        console.log('current user after update: ', currentUser, ' + logged in: ', loggedIn)
    }, [currentUser])
     
    // grab user data from server
    const grabUser = () => {
        api.get('/').then((res) => {
            console.log('res: ', res)
            if (res.data.user) {
                setLoggedIn(true);
                setCurrentUser(res.data);
                console.log('This user is saved in the server session: ', res.data.user.email)
            } else {
                setLoggedIn(false);
                setCurrentUser({
                    email: "dragon@awesome.com",
                    id: "654d220ad01f8227bc54e9d2",
                    cart: []
                });
                setLoggedIn(true)
                console.log('No user saved in server session... This is just a test')
            }
        })
    }


    // const [currentUser, setCurrentUser] = useState({
    //     email: 'myEmail',
    //     id: 'myId',
    //     cart: ['stuff']
    // })
    // console.log(currentUser)
    // const [cart, setCart] = useState([])

  
    // tracks user's login status 

    // {!loggedIn ? <Register/> : <Login/>}

    return (
        <CartContext.Provider value={{ currentCart: currentUser.cart}}>

            <Router> 

                {/* header and navbar across all pages */}
                <Header image="./img/cat_eye.jpeg" logo="./img/logo.png" title="Savage Exotics" subtitle="Adopt A Pet Your Neighbors Won't Expect..." />
                <TopNav updateUser={updateUser} loggedIn={loggedIn} />

                <Routes>

                    {/* about us */}
                    <Route exact path='/about' element={
                        <About image="./img/leopard.jpeg" />
                    } />

                    {/* login page */}
                    <Route exact path='/login' element={
                        <Login updateUser={updateUser} loggedIn={loggedIn} currentUser={currentUser} />
                    }
                    />

                    {/* registration page */}
                    <Route exact path='/register' element={
                        <RegistrationForm updateUser={updateUser} />
                    } />

                    {/* animal shop */}
                    <Route exact path='/shop' element={
                        <Container className='pb-5'>
                            <Shop updateCart={updateCart} updateUser={updateUser} currentUser={currentUser} />
                        </Container>
                    } />

                    {/* shopping cart */}
                    <Route exact path='/cart' element={
                        <Container className='pb-5'>
                            <Cart currentUser={currentUser} />
                        </Container>}
                    />

                    {/* home page */}
                    <Route exact path='/' element={
                        <Container className="pb-5 mb-5">
                            <div className="py-3 text-light text-center">
                                <h4 className="fw-light lh-2">We offer the<br /> <span>Highest-Quality Exotic Pets</span><br /> on the market.</h4>
                            </div>
                            <Slideshow />
                        </Container>
                    } />
                </Routes>



                {/* <Container className=""> */}
                {/* registration form container */}
                {/* const [show, setShow] = useState(false)
                    const showForm = () => {
                        setShow(true)
                    }
                <button onClick={showForm}></button>
                {show &&
                    <RegistrationForm
                        // click cancel button to hide registration form
                        cancelBtn={<Button variant="secondary" className="mt-3  mx-1" onClick={() => setShowRegistration(!showRegistration)}>Cancel</Button>}
                    />
                } */}


                {/* </Container> */}
                <Footer copyright="&copy; boolean_dragon 2023"></Footer>

            </Router>
        </CartContext.Provider>
    )
}

export default App;