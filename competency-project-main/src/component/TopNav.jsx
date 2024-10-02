import React, { useState, useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import { LoginContext } from './App';
// import $ from 'jquery';


const TopNav = (props) => {
    // const [loggedIn, setLoggedIn] = useContext(LoginContext)

    return (
        <>
            <Navbar className="topNav px-4 sticky-top mb-4 navbar-dark" bg="dark" expand="md">
                {/* <Navbar.Brand href="#home">
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="top-nav" className="toggler"></Navbar.Toggle>
                <Navbar.Collapse className="justify-content-md-center" id="top-nav">
                    <Nav activeKey="/" className="col-11 col-sm-8 col-md-12 d-flex flex-row flex-wrap justify-content-center pt-2 pt-sm-0 mx-auto">
                        {/* home nav link */}
                        <Link to='/'>
                            <Button className="btn btn-theme pt-2 pb-1 m-2">Home</Button>
                        </Link>
                        {/* about nav link */}
                        <Link to='/about'>
                            <Button className="btn btn-theme pt-2 pb-1 m-2">About Us</Button>
                        </Link>
                        {/* login nav link */}
                        <Link to='/login'>
                            <Button className="btn btn-theme pt-2 pb-1 m-2" >Log In
                                {/* {loggedIn ? 'Log In' : 'Log Out'} */}
                            </Button>
                        </Link>
                        {/* these links show when user is logged in */}
                        {props.loggedIn && (
                            <>
                                {/* shop nav link */}
                                <Link to='/shop'>
                                    <Button className="btn-theme pt-2 pb-1 m-2">Shop Animals</Button>
                                </Link>
                                {/* cart nav link */}
                                <Link to='/cart'>
                                    <Button className="btn-theme pt-2 pb-1 m-2">My Cart</Button>
                                </Link>
                            </>

                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default TopNav;