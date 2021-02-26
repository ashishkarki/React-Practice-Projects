import React, {useContext, useState} from "react";
import {data} from '../../data'

// create a context
const PersonContext = React.createContext(undefined, undefined)
// the above context gives us access to two components: Provider, Consumer

const UseContextExample = () => {
    const [people, setPeople] = useState(data)
    const removePerson = (deleteId) => {
        setPeople(existingPeople =>
            existingPeople.filter(person => person.id !== deleteId)
        )
    }

    return <PersonContext.Provider value={{removePerson}}>
        <h3>Context API / useContext example</h3>
        <List people={people}/>
    </PersonContext.Provider>
}

const List = ({people}) => {
    return <>
        {
            people.map(person => {
                return <SinglePerson key={person.id}
                                     {...person}/>
            })
        }
    </>
}

const SinglePerson = ({id, name}) => {
    const {removePerson} = useContext(PersonContext)

    return <div className='item'>
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>Remove</button>
    </div>
}

export default UseContextExample