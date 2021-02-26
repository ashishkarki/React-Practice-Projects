export const ACTION_TYPES = {
    ADD_ITEM: 'add new item',
    REMOVE_ITEM: 'remove this item',
    NO_ITEM: 'no or empty item',
    CLOSE_MODAL: 'close container modal',
}

// reducers always return some kind of state
export const reducer = (state, action) => {
    if (action.type === ACTION_TYPES.ADD_ITEM) {
        const newPeople = [...state.people, action.payload]

        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: 'Item added'
        }
    } else if (action.type === ACTION_TYPES.NO_ITEM) {
        return {
            ...state,
            isModalOpen: true,
            modalContent: 'Please enter an Item'
        }
    } else if (action.type === ACTION_TYPES.CLOSE_MODAL) {
        return {
            ...state,
            isModalOpen: false,
        }
    } else if (action.type === ACTION_TYPES.REMOVE_ITEM) {
        const newPeople = state.people.filter(person =>
            person.id !== action.payload.id
        )

        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: `Removed Item: ${action.payload.name}`
        }
    } else
        throw new Error('No matching Action')
}