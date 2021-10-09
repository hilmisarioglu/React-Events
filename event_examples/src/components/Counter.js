import React, {useState} from 'react'

const Counter = () => {

    // Set the initial count state to zero, 0
    const [count, setCount] = useState(0)

    // Create handleIncrement event handler
    const handleIncrement = () =>{
        setCount(count => count + 1)
    }
    // Create handleDecrement event handler
    const handleDecrement = () =>{
        setCount(count => count - 1)
    }

    return (
        <div>
            <button onClick={handleIncrement}>Increase</button>
            <p>{count}</p>
            <button onClick={handleDecrement}>Decrease</button>
        </div>
    )
}

export default Counter
