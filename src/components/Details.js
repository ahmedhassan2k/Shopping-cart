import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddItemAction, SoldAction } from '../Actions/Actions'
function Details() {
    let { id } = useParams()
    let history = useHistory()
    const shoe = useSelector((state) => state.shopReducer.filter(shoe => shoe.id === id))
    const status = useSelector((state) => state.loginReducer)
    let dispatch = useDispatch()
    let obj = {
        userId: status.Id,
        id: shoe[0].id,
        Name: shoe[0].Name,
        Gender: shoe[0].Gender,
        Category: shoe[0].Category,
        Brand: shoe[0].Brand,
        Price: shoe[0].Price

    }
    const btn_add = () => {
        if (status.LoggedIn === true) {
            if (shoe[0].items_Left > 0) {
                dispatch(AddItemAction(obj))
                dispatch(SoldAction(shoe[0].id))
                alert('Item added to cart.')
                history.push('./Men')
            } else {
                alert('Item out of stock, try sometime later')
            }
        }
        else {
            alert('Not Logged In. You need to log in for ordering')
        }

    }
    return (
        <div className='shoe-container'>
            {shoe.map((val, ind) => {
                let Availiblity = 'Available in Stock'
                if (val.Available === false) {
                    Availiblity = 'Out of Stock'
                }
                return (
                    <div>
                        <h1>{val.Name}</h1>
                        <div className='shoe-box'>
                            <div className='shoe_info' style={{ color: 'Black' }} key={ind}>
                                <span className='index'><strong>Description:</strong></span><span className='value'><strong>{val.Description}</strong></span>
                                <br /><br /><span className='index'><strong>Brand:</strong></span><span className='value'><strong>{val.Brand}</strong></span>
                                <br /><br /><span className='index'><strong>Category:</strong></span><span className='value'><strong>{val.Category}</strong></span>
                                <br /><br /><span className='index'><strong>Price:</strong></span><span className='value'><strong>{val.Price}</strong></span>
                                <br /><br /><span className='index'><strong>Size:</strong></span><span className='value'><strong>[{val.Size}]</strong></span>
                                <br /><br /><span className='index'><strong>Availiblity:</strong></span><span className='value'><strong>{Availiblity}</strong></span>
                                <br /><br /><span className='index'><strong>Items Left:</strong></span><span className='value'><strong>{val.items_Left}</strong></span>
                                <br /><br /><input className='value' style={{textAlign: "center"}} type='button' onClick={btn_add} value='Add to cart' />
                            </div>
                            <div className='img-box'>
                                <img src={val.image} alt='' width='400px' height='400px' />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )

}
export default Details;