import React, {useEffect, useState} from 'react'

const api_url = `https://api.github.com/users`

// DEMOs how to use second argument in useEffect
// 4. Also, useEffect's callback cannot be async..
const UseEffectFetchData = () => {
    const [ghUsers, setGhUsers] = useState([])

    const equals = (a, b) =>
        a.length === b.length &&
        a.every((v, i) => v === b[i])

    const getUsers = async () => {
        const response = await fetch(api_url)
        const users = await response.json()

        if (!equals(users, [])) {
            setGhUsers(users)
        }

        console.log(users)
    }
    useEffect(() => {
        getUsers()
    }, []) // if there are chances of callback looping, use [] second param

    return (
        <>
            <h2>useEffect Fetch-Data Example</h2>

            <h3>GitHub Users</h3>
            <ul className='users'>
                {ghUsers.map(user => {
                    const {id, login, avatar_url, html_url} = user

                    return <li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <div>
                            <h4>{login}</h4>
                            <a href={html_url}>GH Profile</a>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}

export default UseEffectFetchData