const initialState = [{
    Id: 1, Name: 'Admin', Email: 'a@a', Address: 'a', Password: '0000', Password: 'a'
},
{
    Id: 2, Name: 'Admin', Email: 'a@b', Address: 'a', Phone: '0000', Password: 'a'
}]

export default function registerReducer(state = initialState, action) {
    switch (action.type) {
        case 'Register': {
            return [action.payload, ...state]
        }
        case 'Update': {
            const user = state.findIndex(data => data.Id === action.payload.Id)
            const updated = [...state]
            updated[user].Phone = action.payload.Phone
            updated[user].Address = action.payload.Address
            updated[user].Password = action.payload.Password
            // console.log(state)
            return [...state]
        }
        default: {
            return [...state]
        }
    }
}