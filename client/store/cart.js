import axios from 'axios';


const GET_CART_ITEMS = 'GET_CART_ITEMS';
const GET_CART_ITEM = 'GET_CART_ITEM';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM';

export function getCartItems(items) {
    return {
        type: GET_CART_ITEMS,
        items
    };
}

export function getCartItem(item) {
    return {
        type: GET_CART_ITEM,
        item
    };
}

export function removeCartItem(itemId) {
    return {
        type: REMOVE_CART_ITEM,
        itemId
    };
}

export function updateCartItem(item) {
    return {
        type: UPDATE_CART_ITEM,
        item
    };
}

export function fetchCartItems() {
    return function thunk(dispatch) {
        return axios.get('/api/cart')
            .then(res => res.data)
            .then(cart => {
                const action = getCartItems(cart);
                dispatch(action);
            });
    };
}

export function postToCart(item) {
    return function thunk(dispatch) {
        return axios.post('/api/cart', item)
            .then(res => res.data)
            .then(newItem => {
                dispatch(getCartItem(newItem));
            });
    };
}

export function putToCartItem(item) {
    return function thunk(dispatch) {
        return axios.put(`/api/cart/${item.id}`, item)
            .then(res => res.data)
            .then(updatedItem => {
                dispatch(updateCartItem(updatedItem));
            });
    };
}

export function deleteCartItem(itemId) {
    return function thunk(dispatch) {
        return axios.delete(`/api/cart/${itemId}`)
            .then(res => res.data)
            .then(() => {
                dispatch(removeCartItem(itemId));
            });
    };
}

export default function reducer(state = [], action) {
    switch (action.type) {

        case GET_CART_ITEMS:
            return action.items;

        case GET_CART_ITEM:
            return [...state, action.item];

        case UPDATE_CART_ITEM:
            return state.map(item => (
                action.item.id === item.id ? action.item : item
            ));

        case REMOVE_CART_ITEM:
            let index = state.indexOf(state.find(item => +action.itemId === +item.id))
            let firstPart = state.slice(0, index);
            let secondPart = state.slice(index + 1);
            return firstPart.concat(secondPart);

        default:
            return state;
    }

}