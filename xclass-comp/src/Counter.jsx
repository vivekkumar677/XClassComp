
import React, { useState } from 'react'

const CounterFunctionalBased = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count+1);
    };

    const decrement = () => {
        setCount((count) => count-1);
    };

    return (
        <div>
            <h1>Counter</h1>
            {/* Your code here */}
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default CounterFunctionalBased;