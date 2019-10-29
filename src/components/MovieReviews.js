// Code MovieReviews Here
import React from 'react';
import LatestMoviewReviewContainer from './LatestMovieReviewsContainer';

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        <ul>
            { reviews && reviews.map ? reviews.map(review => (
                <div className="review" key={review.headline}>

                </div>
            )) : null }
        </ul>
    </div>
)
export default MovieReviews