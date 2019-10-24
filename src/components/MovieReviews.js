import React from 'react'

const Review = ({
    display_title,
    byline,
    summary_short,
    link,
    headline

    }) => {
    return (
        <div key={display_title} className='review'>
            <h1><strong>{display_title}</strong></h1>
            <h2>{headline}</h2>
            <span><em>{byline}</em></span>
            <blockquote>{summary_short}</blockquote>
            <a className="review-link" href={link.url}>
                {link.suggested_link_text}
            </a>
        </div>
    )
}


const MoiveReviews = ({reviews}) => {
    return <div className='review-list'>
        {reviews.map(Review)}
    </div>
}


MoiveReviews.defaultProps = {
    reviews: []
}

export default MoiveReviews
