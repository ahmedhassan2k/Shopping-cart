import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UpdateAction } from "../Actions/Actions";
import { useHistory } from "react-router";
function Update() {
    let dispatch = useDispatch()
    let [address, setAddress] = useState('')
    let [phone, setPhone] = useState('')
    let [password, setPassword] = useState('')
    let [oldPassword, setOldPassword] = useState('')
    let history = useHistory()
    const Id = useSelector((state) => state.loginReducer.Id)
    const userName = useSelector((state) => state.registerReducer.filter(user => user.Id === Id).map(val => val.Name))
    const userEmail = useSelector((state) => state.registerReducer.filter(user => user.Id === Id).map(val => val.Email))
    const userPassword = useSelector((state) => state.registerReducer.filter(user => user.Id === Id).map(val => val.Password))
    // console.log(userPassword)
    const btn_update = (e) => {
        if (oldPassword === userPassword[0]) {
            const user = {
                Id: Id,
                Name: userName,
                Email: userEmail,
                Address: address,
                Phone: phone,
                Password: password
            }
            dispatch(UpdateAction(user))
            alert('User Data Updated')
            history.push('/Profile')
        }
        else {
            alert('Incorrect Password')
        }
        // e.target.reset()
        e.preventDefault()
    }
    return (
        <div className='update-container'>
            <div className='update-box'>
                <h2>Update Information</h2>
                <p>Kindly enter correct information so we could deliver to your door step without any hurdles or delay. :)</p>

                <form className='updateForm' onSubmit={btn_update}>
                    <input type='text' value={userName} disabled />
                    <input type='text' value={userEmail} disabled />
                    <input type='text' placeholder='Address' required onChange={(e) => setAddress(e.target.value)} />
                    <input type='number' placeholder='Phone' required onChange={(e) => setPhone(e.target.value)} />
                    <input type='password' placeholder='New Password' required onChange={(e) => setPassword(e.target.value)} />
                    <input type='password' placeholder='Old Password' required onChange={(e) => setOldPassword(e.target.value)} />
                    <input type='submit' value='Update' />
                </form>
            </div>
        </div>
    )
}
export default Update;