import React, {useState} from "react";
import {data} from '../../data'

const PropDrillingExample = () => {
    const [people, setPeople] = useState(data)
    const removePerson = (deleteId) => {
        setPeople(existingPeople =>
            existingPeople.filter(person => person.id !== deleteId)
        )
    }

    return <section>
        <List people={people} removePerson={removePerson}/>
    </section>
}

const List = ({people, removePerson}) => {
    return <>
        {
            people.map(person => {
                return <SinglePerson key={person.id}
                                     {...person}
                                     removePerson={removePerson}/>
            })
        }
    </>
}

const SinglePerson = ({id, name, removePerson}) => {
    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}

export default PropDrillingExample