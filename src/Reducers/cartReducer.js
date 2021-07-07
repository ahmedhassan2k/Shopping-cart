const initialState = []

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case 'Add_to_cart': {
            return [...state, action.payload]
        }
        case 'Remove': {
            return [...state.filter(item => item.Id !== action.payload.id)]
        }
        case 'Clear': {
            return []
        }
        default: {
            return [...state]
        }
    }
}