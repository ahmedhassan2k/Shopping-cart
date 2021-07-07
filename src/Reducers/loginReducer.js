const initialState = {
    LoggedIn: false,
    Id: ''
}
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case 'LoggedIn': {
            return {
                ...state,
                Id: state.Id = action.payload.Id,
                LoggedIn: state.LoggedIn = true
            }
        }
        default: {
            return { ...state }
        }
    }
}