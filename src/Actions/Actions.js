export const LoginAction = (Id) => ({
    type: 'LoggedIn',
    payload: {
        Id: Id
    }
})
export const RegisterAction = (obj) => ({
    type: 'Register',
    payload: {
        Id: obj.Id,
        Name: obj.Name,
        Email: obj.Email,
        Phone: obj.Phone,
        Address: obj.Address,
        Password: obj.Password
    }
})
export const UpdateAction = (obj) => ({
    type: 'Update',
    payload: {
        Id: obj.Id,
        Name: obj.Name,
        Email: obj.Email,
        Phone: obj.Phone,
        Address: obj.Address,
        Password: obj.Password
    }
})
export const SoldAction = (id) => ({
    type: 'Sold',
    payload: {
        id: id
    }
})
export const AddItemAction = (obj) => ({
    type: 'Add_to_cart',
    payload: {
        UserId: obj.UserId,
        Id: obj.id,
        Name: obj.Name,
        Gender: obj.Gender,
        Category: obj.Category,
        Brand: obj.Brand,
        Price: obj.Price
    }
})
export const RemoveAction = (id) => ({
    type: 'Remove',
    payload: {
        id: id
    }
})
export const CheckoutAction = (items) => ({
    type: 'Checkout',
    payload: items
})
export const clearCart = () => ({
    type: 'Clear',
})

