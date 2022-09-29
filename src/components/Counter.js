import { useState } from 'react'

function Counter() {

    const [myCount, setMyCount] = useState(0)

    return (
        <div>
            <p>the count is: {myCount}</p>
            <button onClick={() => {
                setMyCount(myCount + 1)
            }}>+</button>
            <button onClick={() => {
                setMyCount(myCount - 1)
            }}>-</button>
        </div>

    );
}

export default Counter;