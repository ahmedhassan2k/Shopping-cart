import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { LoginAction } from '../Actions/Actions';
function Login() {
    let history = useHistory()
    let dispatch = useDispatch();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    const Ids = useSelector((state) => state.registerReducer.map(val => val.Id))
    const Emails = useSelector((state) => state.registerReducer.map(val => val.Email))
    const Passwords = useSelector((state) => state.registerReducer.map(val => val.Password))
    // console.log(Emails)
    const btn_login = (e) => {
        e.preventDefault();
        let x = false
        for (let i = 0; i < Emails.length; i++) {
            if (email === Emails[i] && password === Passwords[i]) {
                x = true
                alert('Successfully Logged In')
                history.push('/')
                dispatch(LoginAction(Ids[i]))
                // console.log(Ids[i])
            }
            else {
                continue
            }
        }
        if (x !== true) {
            alert('Enter correct Information')
        }
        e.target.reset()
    }
    return (
        <div className='login-container' onSubmit={btn_login}>
            <div className='login-box'>
                <h1>Login</h1>
                <p>Login to Order. :)</p>
                <form className='loginForm'>
                    <input type='text' placeholder='Email' onChange={(ev) => setEmail(ev.target.value)} />
                    <br /><br /><input type='password' placeholder='Password' onChange={(ev) => setPassword(ev.target.value)} />
                    <br /><br /><input type='submit' value='Login' />
                </form>
                <p>Don't have an account yet. Try registering yourself first.</p>
            </div>

        </div>
    )

}
export default Login;