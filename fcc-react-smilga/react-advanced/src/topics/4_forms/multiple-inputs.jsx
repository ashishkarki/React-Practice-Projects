import React, {useState} from 'react';

const MultipleInputs = () => {
    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState(0)
    const emptyPerson = {
        firstName: '',
        email: '',
        age: '',
    }
    const [person, setPerson] = useState(emptyPerson)
    const [people, setPeople] = useState([])

    const handleChange = (event) => {
        const elementName = event.target.name
        const elementValue = event.target.value

        setPerson({
            ...person,
            [elementName]: elementValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (person.firstName && person.email && person.age) {
            const personWithId = {
                ...person,
                id: new Date().getTime().toString(),
            }

            setPeople([...people, personWithId])

            // also reset person object, now that we added all new properties
            setPerson(emptyPerson)
        }
    }

    return <>
        <h3>Multiple Inputs in React</h3>

        <article>
            <form className='form'>
                <div className='form-control'>
                    <label htmlFor='firstName'>Name : </label>
                    <input type='text'
                           name='firstName' id='firstName'
                           value={person.firstName}
                           onChange={handleChange}/>
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>Email : </label>
                    <input type='email'
                           name='email' id='email'
                           value={person.email}
                           onChange={handleChange}/>
                </div>

                <div className='form-control'>
                    <label htmlFor='firstName'>Age : </label>
                    <input type='text'
                           name='age' id='age'
                           value={person.age}
                           onChange={handleChange}/>
                </div>

                <button type='submit' onClick={handleSubmit}>
                    Add Person
                </button>
            </form>

            {
                people.map((person, index) => {
                    const {id, firstName, email, age} = person
                    return (
                        <div className='item' key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    )
                })
            }
        </article>
    </>
}

export default MultipleInputs