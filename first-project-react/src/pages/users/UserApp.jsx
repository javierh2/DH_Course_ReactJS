import React, { useState } from 'react'
import { FetchList } from './components/FetchList'

export const UserApp = () => {

    const [endpoint, setEndpoint] = useState('users')

    return (
        <>
        <h1>Lista :</h1>
        <FetchList endpoint={endpoint}/>
        <button onClick={() => setEndpoint('comments')}>Cambiar el end-point</button>
        </>
    )
}
