import React, { useEffect, useState } from 'react'

export const FetchList = ({endpoint}) => {

    const urlBase = `https://jsonplaceholder.typicode.com/${endpoint}`

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        try {
            const res = await fetch(urlBase)
            const data = await res.json()
            console.log(data)
            setItems(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchItems()
    }, [endpoint])

    return (
        <>
            {items.map(item => <p key={item.id}>{item.name}</p>)}
        </>
    )
}