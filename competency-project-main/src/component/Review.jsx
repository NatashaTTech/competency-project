import React from 'react';

const Review = ({ name, comment }) => {

    return (
        <div className="review d-flex flex-wrap align-items-center py-3 col-10 mx-auto border-bottom">
            <div className="review-name text-light text-center text-md-end h5 col-12 col-md-3">{name}</div>
            <div className="review-text text-light col-12 col-md-6 text-center px-5">{comment}</div>
            <div className="stars col-12 col-md-2 text-center">
                <i className="fa fa-star px-1"></i>
                <i className="fa fa-star px-1"></i>
                <i className="fa fa-star px-1"></i>
                <i className="fa fa-star px-1"></i>
                <i className="fa fa-star px-1"></i>
            </div>
        </div>
    )
}

export default Review;