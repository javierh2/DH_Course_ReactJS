import React, { useEffect, useState } from 'react'

export const UserApp = () => {

    const urlBase = 'https://jsonplaceholder.typicode.com/users'

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const res = await fetch(urlBase)
            const data = await res.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    // fetch(urlBase)
    //     .then(response => response.json())
    //     .then(json => console.log(json))

    return (
        <>
        {users.map(user => <p key={user.id}>{user.name}</p>)}
        </>
    )
}
