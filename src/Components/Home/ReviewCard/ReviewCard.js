import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="card ">
             <div className="d-flex align-items-center">
                <img className="mx-3" src={review.img} alt="" width="60"/>             
                    <h6 className="text-primary">{review.name}<br/><span className="text-dark">{review.occupation}</span></h6>
                   
                </div>
            <div className="card-body">
                <p className="card-text text-center">{review.quote}</p>
            </div>
           
       </div>
    );
};

export default ReviewCard;