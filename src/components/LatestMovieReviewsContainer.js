import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

//const NYT_API_KEY = 'ExF5HFmpsE1hShccn1U7BEutGa4546LB';
//URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
         //   + `api-key=${NYT_API_KEY}`;

export default class LastestMovieReviewsContainer extends Component{
    constructor(props) {
        super(props)

        this.state ={
            reviews: []
        }
    }

    componentDidMount(){
        this.fetchLatestMovies()
    }

    fetchLatestMovies = () => {
        let url = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' +
        'api-key=ExF5HFmpsE1hShccn1U7BEutGa4546LB'
        fetch(url)
            .then(resp => resp.json())
            .then(response => this.setState({reviews: response.results}))
    }

    render() {
        return(
            <div className='latest-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
