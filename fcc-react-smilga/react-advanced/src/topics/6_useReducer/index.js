import React, {useReducer, useState} from 'react';
import Modal from './modal';
import {ACTION_TYPES, reducer} from './reducer'

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: 'Hello Modal'
}

const Index = () => {
    const [name, setName] = useState('')

    // const [showModal, setShowModal] = useState(false)
    const [state, dispatch] = useReducer(
        reducer,
        defaultState
    )

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name) {
            const newItem = {
                id: new Date().getTime().toString(),
                name: name
            }
            dispatch({
                type: ACTION_TYPES.ADD_ITEM,
                payload: newItem,
            })
            setName('')
        } else {
            dispatch({
                type: ACTION_TYPES.NO_ITEM
            })
        }
    }

    const closeModal = () => {
        dispatch({
            type: ACTION_TYPES.CLOSE_MODAL,
        })
    }

    return <>
        {
            state.isModalOpen &&
            <Modal className='modal'
                   modalContent={state.modalContent}
                   closeModal={closeModal}/>
        }

        <form onSubmit={handleSubmit} className='form'>
            <input type='text'
                   value={name}
                   placeholder='Please type person name'
                   onChange={(evt) => setName(evt.target.value)}/>

            <button type='submit' className='btn'>
                Add
            </button>
        </form>

        <br/>
        <h4>List of People/anything</h4>

        {
            state.people.map(person => {
                return <div key={person.id} className='item'>
                    <h4>{person.name}</h4>
                    <button onClick={() => dispatch({
                        type: ACTION_TYPES.REMOVE_ITEM,
                        payload: person
                    })}>
                        Delete
                    </button>
                </div>
            })
        }
    </>
}

export default Index