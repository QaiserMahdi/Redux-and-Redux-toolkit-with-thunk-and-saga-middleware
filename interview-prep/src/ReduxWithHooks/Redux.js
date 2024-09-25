import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from './actions.js';

function ReduxWithHooks() {
    const count = useSelector((state) => state.counterReducer.count)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Redux with useDispatch and useSelector</h1>
            {count}
            <button onClick={() => dispatch(incrementCount(5))}>Increment</button>
            <button onClick={() => dispatch(decrementCount())}>Decrement</button>
        </div >
    )
}

export default ReduxWithHooks;