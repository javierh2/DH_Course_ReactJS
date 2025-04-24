import React from 'react'
import { useFetchData } from '../../../hooks/useFetchData'

export const FetchList = ({endpoint}) => {

    const {data, isLoading} = useFetchData({endpoint})


    return (
        <>
            { isLoading
            ? <p>Cargando...</p>
                :endpoint == 'users'
                    ? data.map(item => <p key={item.id}>{item.name}</p>)
                    : data.map(item => <p key={item.id}>{item.body}</p>)
            }
        </>
    )
}