// ACTION TYPES

const SET_MAX_HP = 'SET_MAX_HP';

// ACTION CREATORS

export function setMaxHP(hp) {
    return {
        type: SET_MAX_HP,
        hp
    };
}

// REDUCER
export default function reducer(state = +Infinity, action) {

    switch (action.type) {

        case SET_MAX_HP:
            return action.hp;

        default:
            return state;
    }

}
