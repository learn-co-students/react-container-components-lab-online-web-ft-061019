import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
    constructor(){
        super()
        this.state = {
            reviews: [],
            searchTerm: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?')
        .then(res => res.json())
        .then(reviewData => this.setState({ reviews: reviewData.results}))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                
                <div className="searchable-movie-reviews">
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </form>
        )
    }

}
