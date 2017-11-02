// ACTION TYPES

const SET_MIN_PRICE = 'SET_MIN_PRICE';

// ACTION CREATORS

export function setMinPrice(price) {
    return {
        type: SET_MIN_PRICE,
        price
    };
}

// REDUCER
export default function reducer(state = 0, action) {

    switch (action.type) {

        case SET_MIN_PRICE:
            return action.price;

        default:
            return state;
    }

}