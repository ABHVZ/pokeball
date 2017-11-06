import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postReview } from '../../store'

class PokemonReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localReviewInput: ''
        }
        this.handleReviewChange = this.handleReviewChange.bind(this);
        this.onSubmitReview = this.onSubmitReview.bind(this);
    }

    render() {
        const { user, reviews } = this.props;
        return (
            <div className="ui threaded comments">
                <h3 className="ui dividing header">Reviews</h3>
                {reviews && reviews.map(review => (
                    <div key={review.id} className="comment">
                        <a className="avatar">
                            {review.user && <img src={review.user.profilePic} />}
                        </a>
                        <div className="content">
                            {review.user && <a className="author">{review.user.fullName}</a>}
                            <div className="metadata">
                                <span className="date">{review.createdAt}</span>
                            </div>
                            <div className="text">
                                {review.content}
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="comment">
                    <a className="avatar">
                        {user && <img src={user.profilePic} />}
                    </a>
                    <div className="content">
                        {user && <a className="author">{user.fullName}</a>}
                        <form>
                            <textarea className="review-input" value={this.state.localReviewInput} onChange={this.handleReviewChange} />
                            <br />
                            <div className="ui black labeled submit icon button" onClick={this.onSubmitReview}>
                                <i className="icon edit" />Add Review
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    handleReviewChange(event) {
        this.setState({ localReviewInput: event.target.value })
    }

    onSubmitReview(event) {
        event.preventDefault();
        let review = {
            content: this.state.localReviewInput,
            pokemonId: this.props.currentPokemon.id,
            userId: this.props.user.id
        }
        this.props.submitReview(review);
        this.setState({localReviewInput: ''})
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        user: state.user,
        reviews: ownProps.currentPokemon && state.reviews &&
        state.reviews.filter(review => review.pokemonId === ownProps.currentPokemon.id)
    }
}

const mapDispatchToProps = (dispatch) => ({
    submitReview(review) {
        dispatch(postReview(review));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonReview));
