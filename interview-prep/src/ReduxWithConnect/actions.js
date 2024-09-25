
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const incrementCount = (e) => {
    return {
        type: INCREMENT,
        payload: e
    }
}

export const decrementCount = (e) => {
    return {
        type: DECREMENT,
        payload: e
    }
}