import React, {useEffect, useState} from "react";

const api_url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturns = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')

    useEffect(() => {
        fetch(api_url)
            .then(r => {
                if (r.status >= 200 && r.status <= 299) {
                    return r.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(r.statusText)
                }
            })
            .then(user => {
                const {login} = user
                setUser(login)
                setIsLoading(false)
                setIsError(false)
            })
            .catch(err => {
                // below two lines are optional as these are set above
                // setIsLoading(false)
                // setIsError(true)
                console.log("There was an error with the request!!")
            })
    }, []) // [] means useEffect just runs during first-time rendering

    if (isLoading) {
        return <div>
            <h4>Loading....</h4>
        </div>
    }

    if (isError) {
        return <h4 style={{color: 'red'}}>There was an error</h4>
    }

    return <>
        <h4>{user}</h4>
    </>
}

export default MultipleReturns