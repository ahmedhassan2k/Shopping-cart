import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router';
import { CheckoutAction, RemoveAction, clearCart } from '../Actions/Actions';
function Cart() {

    const items = useSelector((state) => state.cartReducer)
    const amount = items.map((val) => val.Price)
    let history = useHistory()
    let totalAmount = 0
    let dispatch = useDispatch()
    for (let i = 0; i < amount.length; i++) {
        totalAmount = totalAmount + amount[i]
    }

    const btn_remove = (id) => {
        dispatch(RemoveAction(id))
    }

    const btn_checkout = () => {
        if (items.length !== 0) {
            for (let i = 0; i < items.length; i++) {
                dispatch(CheckoutAction(items[i]))

            }
            dispatch(clearCart())
            alert('Thanks for shopping here')
            history.push('/Profile')
        } else {
            alert('No items added')
            history.push('/Shop')
        }
    }
    return (
        <div className='cart-container'>

            <div className='cart-box'>
                <h1>Your Cart</h1>
                <hr />
                <div className='orders'>
                    {items.map((val, ind) => {
                        return (
                            <div key={ind} className='cart-list'>
                                <span className='item'><strong>Name:</strong></span>
                                <span className='itemVal'>{val.Name}</span>
                                <span className='btn'><button onClick={() => btn_remove(val.Id)}>&#10060;</button></span>
                                <span className='item'><strong>Gender:</strong></span>
                                <span className='itemVal'>{val.Gender}</span>
                                <span className='item'><strong>Brand:</strong></span>
                                <span className='itemVal'>{val.Brand}</span>
                                <span className='item'><strong>Category:</strong></span>
                                <span className='itemVal'>{val.Category}</span>
                                <span className='item'><strong>Size:</strong></span>
                                <span className='itemVal'>[{val.size}]</span>
                                <span className='item'><strong>Price:</strong></span>
                                <span className='itemVal'>{val.Price}</span>
                            </div>
                        )
                    })}
                </div>
                <h2>Total: {totalAmount}</h2>
                <input type='button' value='Checkout' onClick={btn_checkout} />
            </div>
        </div>
    )

}
export default Cart;