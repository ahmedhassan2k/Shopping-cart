import history from './History';
import { Router, Switch, NavLink, Route } from 'react-router-dom'
import { useSelector } from "react-redux"
import Profile from './Profile';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Cart from './Cart'
import Shop from './Shop'
import Update from './UpdateUser';
import About from './About';
import Discover from './Discover';

function Navigation() {
    const status = useSelector((state) => state.loginReducer.LoggedIn)

    return (

        <Router history={history}>
            <div className='nav-container'>
                <div className='nav-link'>
                    <div className='nav-left'>
                        <NavLink to='/Shop'>
                            <li>Shop</li>
                        </NavLink>
                        <NavLink to='/Discover'>
                            <li>Discover</li>
                        </NavLink>
                        <NavLink to='/About'>
                            <li>About us</li>
                        </NavLink>
                    </div>
                    <div className='nav-mid'>
                        <NavLink exact to='/'>
                            <li>Home</li>
                        </NavLink>
                    </div>
                    <div className='nav-right'>
                        <NavLink to='/Register'>
                            <li style={{ display: status ? "none" : "inline-block" }}> Register</li>
                        </NavLink>
                        <NavLink to='/Login'>
                            <li style={{ display: status ? "none" : "inline-block" }}>Login</li>
                        </NavLink>
                        <NavLink to='/Profile'>
                            <li style={{ display: status ? "inline-block" : "none" }}>Profile</li>
                        </NavLink>
                        <NavLink to='/Cart'>
                            <li>Cart</li>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='/Register' component={Register}></Route>
                <Route path='/Login' component={Login}></Route>
                <Route path='/Profile' component={Profile}></Route>
                <Route path='/Cart' component={Cart}></Route>
                <Route path='/Shop' component={Shop}></Route>
                <Route path='/Update' component={Update}></Route>
                <Route path='/About' component={About}></Route>
                <Route path='/Discover' component={Discover}></Route>
                


            </Switch>
        </Router>
    )
}
export default Navigation;