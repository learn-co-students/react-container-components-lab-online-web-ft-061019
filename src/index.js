import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from '/Users/dawn/react-container-components-lab-online-web-ft-061019/src/components/LatestMovieReviewsContainer.js';
import SearchableMovieReviewsContainer from '/Users/dawn/react-container-components-lab-online-web-ft-061019/src/components/SearchableMovieReviewsContainer.js';

ReactDOM.render(
  <div className="app">
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);