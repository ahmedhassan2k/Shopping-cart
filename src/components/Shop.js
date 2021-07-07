import { Router, NavLink, Switch, Route } from 'react-router-dom'
import history from './sHistory'
import Men from './Men';
import Women from './Women';

import Details from './Details';
function Shop() {
    return (
        <div className='men-women'>
            <div className='shop-heading'>

                <h1>Shop</h1>
            </div>
            <Router history={history}>
                <div className='shopNav'>
                    <div className='left'>
                        <strong> Select Gender:</strong>

                        <NavLink to='/Men'>
                            <li><strong>Men</strong></li>
                        </NavLink>
                    </div>
                    <div className='right'>

                        <NavLink to='/Women'>
                            <li><strong>Women</strong></li>
                        </NavLink>
                    </div>
                </div>
                <Switch>

                    <Route path='/Men' component={Men}></Route>
                    <Route path='/Women' component={Women}></Route>
                    <Route path='/shoe:id' component={Details}></Route>
                </Switch>
            </Router>
        </div>

    )

}
export default Shop;