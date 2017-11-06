import React from 'react'
import { connect } from 'react-redux';

const ReviewRating = (props) => {

    const starCount = 5;
    const { reviews } = props;
    const ratingAvg = reviews && reviews.length &&
        reviews.reduce((acc, cur) => {
            acc += cur.rating;
            return acc;
        }, 0) / reviews.length;

    return (
        <div className="pokemon-review-info">
            <div className="star-ratings">
                {reviews && <div className="star-ratings-top" style={{ width: `${ratingAvg * (100 / starCount)}%` }}>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>}
                <div className="star-ratings-bottom">
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                    <span>☆</span>
                </div>
            </div>
            {reviews && <div className="rating-score">
                <div>{ratingAvg.toFixed(1)}</div>
            </div>}
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: ownProps.currentPokemon && state.reviews &&
        state.reviews.filter(review => review.pokemonId === ownProps.currentPokemon.id)
    }
}

export default connect(mapStateToProps)(ReviewRating);
