import React from 'react';
import LatestMovieReviewContainer from './LatestMovieReviewsContainer';

const MovieReviews = ({reviews}) => (
    <div className='review-list'>
        <ul>
           {  reviews && reviews.map ?
            reviews.map(review => (
                <div className="review" key={review.headline}>
                    
                </div>
            )) : null} 

           
        </ul>

    </div>
)

export default MovieReviews;

// byline: "A.O. SCOTT"
// critics_pick: 0
// date_updated: "2019-10-29 16:44:19"
// display_title: "Frankie"
// headline: "‘Frankie’ Review: Troubled in Paradise"
// link: {type: "article", url: "http://www.nytimes.com/2019/10/23/movies/frankie-review.html", suggested_link_text: "Read the New York Times Review of Frankie"}
// mpaa_rating: "PG-13"
// multimedia: {type: "mediumThreeByTwo210", src: "https://static01.nyt.com/images/2019/10/25/arts/25…eb-430d-be8c-3f5d2fb42983-mediumThreeByTwo210.jpg", width: 210, height: 140}
// opening_date: "2019-10-25"
// publication_date: "2019-10-23"
// summary_short: "Isabelle Huppert leads an impressive cast on a gl