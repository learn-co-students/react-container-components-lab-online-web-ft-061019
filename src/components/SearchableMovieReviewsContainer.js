import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ExF5HFmpsE1hShccn1U7BEutGa4546LB';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor(props){
        super(props)

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

        fetch(URL.concat(this.state.searchTerm))
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
