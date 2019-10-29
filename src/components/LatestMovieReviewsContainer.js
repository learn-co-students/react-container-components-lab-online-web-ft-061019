//<LatestMovieReviewsContainer />
// should have state
//should have a state property "reviews":
// should have top-level element with class "latest-movie-reviews"
// should fetch data from the New York Times API:
//should render reviews after reviews state updated
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from '/Users/dawn/react-container-components-lab-online-web-ft-061019/src/components/MovieReviews.js'

// Code LatestMovieReviewsContainer Here

export default class LastestMovieReviewsContainer extends Component{
    constructor() {
        super();
        //should have state
        //should have a state property "reviews":
        this.state = {
           reviews: []
        };
     }

     
     /* could have done it this way, defined fetch then in the did mount just called fetch
        however i put it all in the componenet did mount, easier to track / less functions
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
    */

    //should fetch data from the New York Times API:
    //should render reviews after reviews state updated
    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=<G1k97dPsJUh4onEJBJkMyfjeyUMdZ5G8>')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results})
            })
        }
    


// should have top-level element with class "latest-movie-reviews"
     render() {
        return (
           <div className="latest-movie-reviews">
              <MovieReviews reviews={this.state.reviews} />
         </div>
        );
     }




    }