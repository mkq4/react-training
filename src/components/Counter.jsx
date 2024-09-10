import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment () { setCount(count + 1) }
    function decrement () { setCount(count - 1) }

    return (
    <>
        <h1>{count}</h1>
        <button onClick={() => decrement()}>decrement</button>
        <button onClick={() => increment()}>increment</button>
    </>
    
  )
}

export default Counter