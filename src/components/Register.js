import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { RegisterAction } from '../Actions/Actions'
function Register() {
    // const status = useSelector((state) => state.loginReducer.LoggedIn)
    // console.log(status)
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [address, setAddress] = useState('')
    let [phone, setPhone] = useState('')
    let [password, setPassword] = useState('')
    let dispatch = useDispatch()
    let history = useHistory()
    const btn_reg = (e) => {
        e.preventDefault()
        const user = {
            Id: Math.floor(Math.random() * 10000),
            Name: name,
            Email: email,
            Address: address,
            Phone: phone,
            Password: password
        }
        dispatch(RegisterAction(user));
        e.target.reset()
        history.push('/Login')
    }
    return (
        <div className='reg-container'>
            <div className='reg-box'>
                <h2>Create Account</h2>
                <p>Creating an account makes ordering fast and easier. Your order Information also will be saved in your account</p>
                <form className='regForm' onSubmit={btn_reg}>
                    <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <input type='text' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                    <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
                    <input type='number' placeholder='Phone' onChange={(e) => setPhone(e.target.value)} />
                    <input type='password' placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type='submit' value='Register' />
                </form>
                <p><strong>Already have an account? Jump to login!!</strong></p>
            </div>

        </div>
    )

}
export default Register;