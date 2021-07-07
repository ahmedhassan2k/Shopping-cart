const initialState = []

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case 'Checkout': {

            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}