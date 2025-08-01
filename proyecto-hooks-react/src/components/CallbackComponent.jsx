import React, { useCallback, useState } from 'react'
import { IncrementComponent } from './IncrementComponent';

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0);

    const incrementMain = useCallback((value) => {
        setCounter(c => c + value);
    }, []);

    return (
        <>
        <div>CallbackComponent</div>
        <h1>Contador: {counter}</h1>
        <IncrementComponent increment={incrementMain} />
        </>
    )
}
