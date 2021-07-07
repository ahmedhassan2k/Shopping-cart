import { products } from "../Data/data"
const initialState = products

export default function shopReducer(state = initialState, action) {
    switch (action.type) {
        case 'Sold': {
            const item = state.findIndex(data => data.id === action.payload.id)
            const updated = [...state]
            updated[item].items_Left -= 1
            return [...state]
        }
        default: {
            return [...state]
        }
    }
}