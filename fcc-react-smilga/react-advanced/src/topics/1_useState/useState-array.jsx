
import React from 'react'
import TextButtonCombo from '../../shared/ui/text-button-combo'
import { data } from '../../data'
import ComponentTitle from '../../shared/ui/component-title'

function UseStateArray() {
    const [ people, setPeople ] = React.useState(data)
    const handler = () => {
        const updatedPeople = people.length === 0 ? data : []
        setPeople(updatedPeople)
    }
    const deleteItem = (id) => {
        const newPeople = people.filter(person => person.id !== id)
        setPeople(newPeople)
    }
    const textButtonComboLabel = people.length === 0 ? 'Refresh Items' : 'Clear Items'

    return (
        <>
            <ComponentTitle title='useState Array example' />

            {
                people.map(person => {
                    const { id, name } = person

                    return <div key={ id } className='item'>
                        <h4>{ name }</h4>
                        <button onClick={ () => deleteItem(id) }>Delete Item</button>
                    </div>
                })
            }

            <TextButtonCombo
                label={ textButtonComboLabel }
                clickHandler={ handler } />
        </>
    )
}

export default UseStateArray
