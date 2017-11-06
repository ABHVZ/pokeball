import axios from 'axios';


const GET_REVIEW = 'GET_REVIEW';
const GET_REVIEWS = 'GET_REVIEWS';
const UPDATE_REVIEW = 'UPDATE_REVIEW';
const REMOVE_REVIEW = 'DELETE_REVIEW';

export function getReview(review) {
    return {
        type: GET_REVIEW,
        review
    };
}

export function getReviews(reviews) {
    return {
        type: GET_REVIEWS,
        reviews
    };
}

export function updateReview(review) {
    return {
        type: UPDATE_REVIEW,
        review
    };
}

export function removeReview(reviewId) {
    return {
        type: REMOVE_REVIEW,
        reviewId
    };
}

export function fetchReviews() {
    return function thunk(dispatch) {
        return axios.get('/api/reviews')
            .then(res => res.data)
            .then(reviews => {
                const action = getReviews(reviews);
                dispatch(action);
            });
    };
}

export function postReview(review) {
    return function thunk(dispatch) {
        return axios.post('/api/reviews', review)
            .then(res => res.data)
            .then(newReview => {
                dispatch(getReview(newReview));
            });
    };
}

export function deleteReview(reviewId) {
    return function thunk(dispatch) {
        return axios.delete(`/api/reviews/${reviewId}`)
            .then(res => res.data)
            .then(() => {
                dispatch(removeReview(reviewId));
            });
    };
}

export function putReview(review) {
    return function thunk(dispatch) {
        return axios.put(`/api/artists/${review.id}`, review)
            .then(res => res.data)
            .then(updatedReview => {
                dispatch(updateReview(updatedReview));
            });
    };
}

export default function reducer(state = [], action) {
    switch (action.type) {

        case GET_REVIEWS:
            return action.reviews;

        case GET_REVIEW:
            return [...state, action.review];

        case UPDATE_REVIEW:
            return state.map(review => (
                action.review.id === review.id ? action.review : review
            ));

        case REMOVE_REVIEW:
            let index = state.indexOf(state.find(review => +action.reviewId === +review.id))
            let firstPart = state.slice(0, index);
            let secondPart = state.slice(index + 1);
            return firstPart.concat(secondPart);

        default:
            return state;
    }

}
