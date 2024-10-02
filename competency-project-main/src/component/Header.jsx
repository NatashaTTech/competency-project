import React from 'react';

const Header = ({ image, subtitle }) => {
    return (
        <>
            <div className='mainHeader col-12 text-center mx-auto pt-2 pt-md-4 d-flex flex-wrap justify-content-center'>
                <div className="col-5 col-md-3">
                    <img src={image} className='rounded'></img>
                    {/* <img src="../../public/img/tiger_stretch.jpeg"></img> */}
                </div>
                {/* <div className="d-flex flex-column justify-content-center align-items-center col-5 pb-2"> */}
                {/* <h1 className="fw-light">{title}</h1> */}
                {/* <img src={logo} className="mb-2"></img> */}
                <div className="header-title col-4 col-md-6 pt-2 pt-md-4">
                    <span>S</span>avage <span>E</span>xotics
                    </div>
                <div className="header-subtitle  col-12 col-md-5 py-3 px-4">{subtitle}</div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Header;