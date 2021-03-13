import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {data} from "../../data";

const Person = () => {
    const [name, setName] = useState('default name')
    const {id} = useParams()

    useEffect(() => {
        const selectedPerson = data.find(person => {
            return person.id === parseInt(id)
        })

        setName(selectedPerson.name)
    }, [])

    return (
        <div>
            <h2>{name}</h2>
            <Link to='/people' className={'btn'}>
                Back to People
            </Link>
        </div>
    );
};

export default Person;
