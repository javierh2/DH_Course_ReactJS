import React from 'react'

export const IncrementComponent = React.memo(({increment}) => {
    console.log('IncrementComponent rendered');
    return (
        <button type="button" className="btn btn-warning" onClick={() => increment(5)}>Incrementar +5</button>
    )
});
