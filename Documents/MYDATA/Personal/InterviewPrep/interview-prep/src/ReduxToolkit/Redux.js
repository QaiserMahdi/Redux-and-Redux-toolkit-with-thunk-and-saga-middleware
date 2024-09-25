import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store';

function ReduxToolkit() {
    const count = useSelector((state) => {
        return state.counter.count

    });

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Toolkit</h1>
            <div>{count}</div>
            <button onClick={() => dispatch(increment(5))}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default ReduxToolkit;