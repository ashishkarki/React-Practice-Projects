import React, {useState} from 'react';
import {data} from '../../data'
import Modal from './modal';

const Index = () => {
    const [name, setName] = useState('')
    const [people, setPeople] = useState(data)
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name) {
            setShowModal(true)
            setPeople([...people, {
                id: new Date().getTime().toString(),
                name: name
            }])

            setName('')
        } else {
            setShowModal(true)
        }
    }

    return <>
        <br/>
        <hr/>
        <h3>UseReducer Example</h3>

        {showModal && <Modal/>}

        <form onSubmit={handleSubmit}>
            <div>
                <input type='text'
                       value={name}
                       placeholder='Please type person name'
                       onChange={(evt) => setName(evt.target.value)}/>
            </div>

            <button type='submit' className='btn'>
                Add
            </button>
        </form>

        <br/>
        <h4>List of People/anything</h4>
        {
            people.map(person => {
                return <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                </div>
            })
        }
    </>
}

export default Index