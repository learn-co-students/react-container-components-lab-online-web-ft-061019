import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchForm from './SearchForm';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const API_KEY_CABOOSE = `&api-key=${NYT_API_KEY}`

class SearchableMovieReviews extends Component {
    constructor() {
        super()
     
        this.state = {
          reviews: [],
          searchTerm: ""
        };
    }

    handleSearchClick = (event) => {
        event.preventDefault()
        fetch(BASE_URL + this.state.searchTerm + API_KEY_CABOOSE)
           .then(resp => resp.json())
           .then(apiData => this.setState({ reviews: apiData.results }))
           .catch(error => console.log(error))
     }

     handleFormChange = event => {
        const {name, value} = event.target
        
        this.setState({ 
           [name]: value 
        })
     }

     render() { 
        return ( 
           <div className="searchable-movie-reviews">
              <SearchForm 
                 onChange={this.handleFormChange} 
                 onFormSubmit={this.handleSearchClick} 
                 searchTerm={this.state.searchTerm} />
              <h6>Search Results:</h6>
              <MovieReviews reviews={this.state.reviews} />
           </div>
        );
     }
}
    

export default SearchableMovieReviews