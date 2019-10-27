//<SearchableMovieReviewsContainer />
//should have state:
//should have the state properties "reviews" and "searchTerm"

import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from '/Users/dawn/react-container-components-lab-online-web-ft-061019/src/components/MovieReviews.js';

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props)
//should have state:
//should have the state properties "reviews" and "searchTerm"
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }


    handleInputChange = e => {
        this.setState({ searchTerm: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=<search-term>'.concat(this.state.searchTerm))
            .then(response => response.json())
            .then(res => this.setState({reviews: res.result}))
    }
  
      render(){
            return(
                <div className='searchable-movie-reviews'>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='search-input'>Search Reviews   </label>
                        <input id='search-input' type='text' onChange={this.handleInputChange} />
                        <button type='submit'>Search</button>
                    </form>
                    {typeof this.state.reviews === 'object' &&
                        this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            )
        }



}
