import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
function Profile() {
    const Id = useSelector((state) => state.loginReducer.Id)
    const userData = useSelector((state) => state.registerReducer.filter(user => user.Id === Id))
    const orders = useSelector((state) => state.orderReducer)
    let history = useHistory()
    console.log(orders)
    const btn_update = () => {
        if (Id === '') {
            alert('Not logged in')
        }
        else {
            history.push('./Update')
        }
    }
    return (
        <div className='profile-container'>
            <div className='profile-box'>
                <div>
                    <h1>Your Profile</h1>
                </div>
                {userData.map((val, ind) => {
                    return (
                        <div key={ind} className='info'>
                            <span className='ind'><strong>Name:</strong></span> <span className='val'><strong>{val.Name}</strong></span>
                            <br /><br /><span className='ind'><strong>Email:</strong></span> <span className='val'><strong>{val.Email}</strong></span>
                            <br /><br /><span className='ind'><strong>Address:</strong></span> <span className='val'><strong>{val.Address}</strong></span>
                            <br /><br /><span className='ind'><strong>Phone:</strong></span> <span className='val'><strong>{val.Phone}</strong></span>
                            {/* <br/><br/>Password: <span><strong>{val.Password}</strong></span> */}
                        </div>
                    )
                })}
                <input id='btn_update' type='button' value='Update Information' onClick={btn_update}></input>
            </div>
            <div className='orderInfo-box'>
                <h1>Your Orders</h1>
                {orders.map((val, ind) => {
                    return (
                        <div className='info' key={ind}>
                            <span className='ind'><strong>Name:</strong></span><span className='val'>{val.Name}</span>
                            <span className='ind'><strong>Price:</strong></span><span className='val'>{val.Price}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Profile