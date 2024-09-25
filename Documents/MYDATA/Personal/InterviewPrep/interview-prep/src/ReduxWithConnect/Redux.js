import React from 'react';
import { connect } from 'react-redux';
import { decrementCount, incrementCount } from './actions.js';

function ReduxWithConnect({ count, incrementCount, decrementCount }) {

    return (
        <div>
            <h1>Normal Redux with connect</h1>
            {count}
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div >
    )
}

const mapStateToProps = (state) => ({
    count: state.counterReducer.count
})

const mapDispatchToProps = {
    incrementCount,
    decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxWithConnect);