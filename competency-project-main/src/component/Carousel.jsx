import React from 'react';
import { Carousel } from 'react-bootstrap'

const Slideshow = () => {
    // $('span.carousel-control-prev-icon').addClass('fa fa-chevron-circle-left').removeClass('.carousel-control-prev-icon')
    return (
    <Carousel className="mx-auto" fade="true" pause="false" controls="true" indicators="">
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block carousel-sm"
                src="./img/parrot2.jpeg"
                alt="First slide" />
            <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block"
                src="./img/carousel_wolf.jpeg"
                alt="Second slide" />
            <Carousel.Caption>
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block carousel-sm"
                src="./img/flamingos.jpeg"
                alt="Third slide" />
            <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block"
                src="./img/carousel_elephant.jpeg"
                alt="Fourth slide" />
            <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block"
                src="./img/carousel_monkey.jpeg"
                alt="Fourth slide" />
            <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block"
                src="./img/carousel_tiger.jpeg"
                alt="Fourth slide" />
            <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block carousel-sm"
                src="./img/carousel_fox.jpeg"
                alt="Fourth slide" />
            <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="landing-carousel d-flex justify-content-center">
            <img className="d-block"
                src="./img/carousel_eagle.jpeg"
                alt="Fourth slide" />
            <Carousel.Caption>
                {/* <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
)
}

export default Slideshow;