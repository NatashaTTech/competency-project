import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Review from './Review';
import { Link } from 'react-router-dom';

const About = ({ image }) => {

    return (
        <Container>
            {/* <h2 className="text-light text-center fw-light">About Us</h2> */}
            <div className="about-heading col-8 mx-auto text-center lh-base fw-light text-light pt-3">
                <div className="h3"><span>I</span>ncredible Animals.</div>
                <div className="h3">Delighted Customers.</div>
            </div>
            <div className="col-12">
                {/* <img src={image} alt="image" className="rounded col-2" /> */}
                <div>
                    <div className="text-center lh-2 col-10 col-md-6 mx-auto fs-md-5 fw-light pt-3 text-light">Here at Savage Exotics, we pride ourselves on having the happiest, healthiest exotic animals on the market.</div>
                    <div className="text-center lh-2 col-10 col-md-6 mx-auto fs-md-5 fw-light pt-2 pb-4 text-light">We are dedicated to ensuring our pets are placed in a loving home, and that our clients find their best companions.</div>

                </div>
            </div>
            <div className="review-wrapper">
                <div className="about-heading text-center h3 fw-light text-light py-md-2">What our clients are saying:</div>
                <div className="review-container my-3">
                    <Review name="Sarah:" comment='"Amazing service! I absolutely love my new baby hippo!"' />
                    {/* <div className="col-10 col-md-9 mx-auto border-bottom pb-1 mb-md-3"></div> */}
                    <Review name="Lily:" comment='"I no longer worry about intruders since I brought home my tiger!"' />
                    {/* <div className="col-10 col-md-9 mx-auto border-bottom pb-1 mb-md-3"></div> */}
                    <Review name="Anthony:" comment='"My leopard loves going for long walks on the beach with me."' />
                </div>
                <div className="d-flex align-items-center justify-content-center pt-3">
                    <Link to='/login'>
                        <Button className="btn btn-theme">Log In</Button>
                    </Link>
                    <div className="text-light">or</div>
                    <Link to='/login'>
                        <Button className="btn btn-theme">Join Us!</Button>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

export default About;