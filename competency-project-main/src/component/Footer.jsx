import React from 'react';

const Footer = ({copyright}) => {
    return (
        <div className="footer fixed-bottom bg-dark pt-1 pt-sm-2 pb-1 mt-5 text-center">{copyright}</div>
    )
}

export default Footer;