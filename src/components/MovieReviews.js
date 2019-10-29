//<MovieReviews />
//✓ should be a stateless functional component
//✓ should have a top-level component with class "review-list"
//✓ should render all the reviews


// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ reviews, onClick }) => {
   return (
      <div className="review-list">
         { reviews.map((review, index) => {
            return (
               <div onClick={onClick} className="review" key={index}>
                  <h1>{review.display_title}:</h1>
                  <p>By: {review.byline}</p>
                  <p>{review.summary_short}</p>
                  <p>Critics Pick: {review.critics_pick}</p>
               </div>
            )
         })}
      </div> 
   )
   
}

export default MovieReviews