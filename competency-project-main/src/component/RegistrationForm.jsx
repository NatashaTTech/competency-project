import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import '../api/index';
import axios from 'axios';
// const axios = require('axios')

const api = axios.create({
    baseURL: 'http://localhost:3030/api',
})

const RegistrationForm = () => {

    const [newUser, setNewUser] = useState({email: '', password: ''})

    const handleEmail = (e) => {
        const { email, value } = e.target;
        setNewUser({...newUser, email: value });
        // console.log(newUser)
    }
    const handlePass = (e) => {
        const { password, value } = e.target;
        setNewUser({...newUser, password: value });
        // console.log(newUser)
    }

    const handleSubmit = () => {
        console.log('handling submit new user as: ', newUser.email)
        api.post('/users', {
            email: newUser.email,
            password: newUser.password
        }).then((res) => {
            console.log(res);
            if (!res.data.errmsg) {
                console.log('Create new user success')
            } else {
                console.log('email already exists in database')
            }
        }).catch((err) => {
            console.log('error signing up: ', err)
        })
        // setNewUser({email: '', password: ''}) // clear input fields
    } // end handle submit


    return (
        
        <div id='registration-form' className='bg-dark rounded text-light col-11 col-sm-9 col-lg-7 col-xl-5 mx-auto px-3 py-4 mt-5'>
            <h3 className='text-center py-2'>Create a New Account</h3>
            {/* <div className=''></div> */}
            <div className='text-center py-1'>Enter your information below to register:</div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }} className='p-2 text-center col-md-8 mx-auto'>
                <Form.Group controlId="newEmail">
                    <Form.Control type="email" value={newUser.email} onChange={handleEmail} placeholder="Your Email" className="text-center my-2" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="newPassword">
                    <Form.Control type="password" value={newUser.password} onChange={handlePass} placeholder="Create A Password"  className="text-center my-2" required />
                </Form.Group>
                <Button variant="danger" type="submit" className="mt-3 mx-1">Sign me up!</Button>
            </Form>
            <div className="text-center d-flex justify-content-center align-items-center">
                <div>Already Have an Account? &nbsp;&nbsp;</div>
                <Link to='/login' className="text-center d-block mb-3">
                    <Button variant="success" type="submit" className="mt-3 mx-1">Log In</Button>
                </Link>
            </div>
        </div>
    )
}

export default RegistrationForm;