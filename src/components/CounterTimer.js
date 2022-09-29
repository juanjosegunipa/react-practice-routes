import { useState, useEffect } from 'react';

function CounterTimer() {

    const [theCount, setTheCount] = useState(0);

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTheCount((prevCount => prevCount + 1))
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])



    return (
        <div>
            <p>The counter timer count is: {theCount}</p>
        </div>

    );
}

export default CounterTimer;