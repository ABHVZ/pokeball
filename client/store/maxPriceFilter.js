// ACTION TYPES

const SET_MAX_PRICE = 'SET_MAX_PRICE';

// ACTION CREATORS

export function setMaxPrice(price) {
    return {
        type: SET_MAX_PRICE,
        price
    };
}

// REDUCER
export default function reducer(state = + Infinity, action) {

    switch (action.type) {

        case SET_MAX_PRICE:
            return action.price;

        default:
            return state;
    }

}
