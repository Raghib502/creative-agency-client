import React from 'react';
import nash from '../../../images/customer-1.png';
import baron from '../../../images/customer-2.png';
import bria from '../../../images/customer-3.png';
import ReviewCard from '../ReviewCard/ReviewCard';

const reviewData = [
    {
        id:1,
        quote : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        name : 'Nash Patrik',
        occupation : 'CEO, Manpol',
        img : nash
    },
    {
        id:2,
        quote : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        name : 'Miriam Barron',
        occupation : 'CEO, Manpol',
        img : baron
    },
    {
        id:3,
        quote : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        name : 'Bria Malone',
        occupation : 'CEO, Manpol',
        img : bria
    }
]
const Review = () => {
    return (
        <div style={{marginTop:'50px'}}>
             <div>
                    <h1 className="text-center">Clients <span style={{ color: '#7AB259' }}>Feedback</span></h1>
            </div>
            <div className="card-deck mt-5">
                    {
                        reviewData.map(review => <ReviewCard review={review} key={review.id}></ReviewCard>)
                    }
                </div>
        </div>
    );
};

export default Review;